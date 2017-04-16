import $ from 'jquery';

(() => {
	var scanPath = "/scansioni";
	//var apiPath = "http://localhost:3000/api/";
	var apiPath = "http://www.zzap.biz/api/";

	var magazinesData;
	var issueData;
	var locales = {"months":["Gennaio","Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]};

	var initScans = function () {
		$.mousestopDelay = 1000; // defaults: 50
		
		// Setup elements visibility
		$("#issue_selector").hide();
		$("#pages").hide();
		$("#reader").hide();
		$("#reader_navigator").hide();
		$("#scan_loader").hide();
		
		// Reader mouse move event
		$("#reader_content").mousemove(readerContentScroll);
		
		// Reader mouse stop event
		$("#reader_content").mousestop(function() {
			$("#reader_navigator").fadeOut('fast');
		});
		
		$("#reader_close_button").on("click", closeReader);

		$("#issueSelectorLink").on("click", transformMiniSelectorToIssueSelector);
		
		$(document).on("keyup", readerKeyboardEventHandler);

		loadScansFromParams(
			$.url().param("issue"),
			$.url().param("volume_page")
		);
	};
			
	var readSemanticURLParams = function() {
		var numeric_params = [];
		var url_parts = $.url().data.attr.relative.split('/');
		for (var index = 0; index < url_parts.length; index++) {
			if (!(isNaN(url_parts[index]) || url_parts[index] === "")) {
				numeric_params.push(url_parts[index]);
			}
		}
		return numeric_params;
	};

	var loadScansFromParams = function(request_issue, request_volume_page) {
		// Check if parameters have been defined with the semantic syntax
		var semantic_params = readSemanticURLParams();
		if (semantic_params.length > 0) {
			if (semantic_params.length == 1) {
				request_issue = semantic_params[0];
			} else if (semantic_params.length == 2) {
				request_issue = semantic_params[0];
				request_volume_page = semantic_params[1];
			}
		}
		
		if (request_issue === undefined && request_volume_page === undefined) {
			loadMagazines();
		} else {
			// Convert parameters from string to number to avoid ambiguity with + operator
			loadIssue({"issue": parseInt(request_issue), "page": parseInt(request_volume_page)});
		}
	};

	var loadMagazines = function() {
		$("#scan_loader").show()
		$.getJSON(apiPath + "magazines.js?callback=?", function(data){
			magazinesData = data;
			renderIssueSelector();
		});
	};

	// Transform Issue Selector and show selected Issue
	var loadIssueFromSelectorEvent = function(event) {
		transformIssueSelectorToMiniSelector(this, event);
	};

	var loadIssue = function(data) {
		$("#pages").hide();
		$("#scan_loader").show();
		$.getJSON(apiPath + "issues/" + data.issue + ".js?callback=?", function(returnData){
			issueData = returnData;
			
			if (validatePage(data.page)) {
				showReader(data.page);
			} else if(data.issue !== undefined) {
				renderIssue();
			}
		});
	};

	var transformMiniSelectorToIssueSelector = function() {
		$("#issues_generated").children().animate({opacity:1,width:85,marginRight:1});
		$("#double_pages_generated").empty();
		return(false);
	};

	// Call it from an event
	var transformIssueSelectorToMiniSelector = function(caller, callingEvent) {
		
		var neighbors = [];
		var i = 0;
		while (i < 10 && neighbors.length < 10) {
			var idNext = $(caller).next();
			var idPrev = $(caller).prev();
			for (var j = 0; j < i; j++) {
				idNext = idNext.next();
				idPrev = idPrev.prev();
			}
			if (idNext.length) {
				neighbors.push(idNext.attr("id"));
			}
			if (idPrev.length) {
				neighbors.push(idPrev.attr("id"));
			}
			i++;
		}
		//console.log(neighbors);
			
		// Show element and assign its ID in one instruction
		var actualId = $(caller).show().attr("id");
		var idPlus1 = $(caller).next().show().attr("id");
		var idPlus2 = $(caller).next().next().show().attr("id");
		var idPlus3 = $(caller).next().next().next().show().attr("id");
		var idPlus4 = $(caller).next().next().next().next().show().attr("id");
		var idPlus5 = $(caller).next().next().next().next().next().show().attr("id");
		var idMinus1 = $(caller).prev().show().attr("id");
		var idMinus2 = $(caller).prev().prev().show().attr("id");
		var idMinus3 = $(caller).prev().prev().prev().show().attr("id");
		var idMinus4 = $(caller).prev().prev().prev().prev().show().attr("id");
		var idMinus5 = $(caller).prev().prev().prev().prev().prev().show().attr("id");

		// Animate transition: four steps
		$.when($("#issues_generated").children().not("#" + actualId).animate(
			{opacity:0})
		).done(function() {
			$.when($("#issues_generated").children().not("#" + actualId + ", #" + idPlus1 + ", #" + idPlus2 + ", #" + idPlus3 + ", #" + idPlus4 + ", #" + idPlus5 + "," +
																						"#" + idMinus1 + ", #" + idMinus2 + ", #" + idMinus3 + ", #" + idMinus4 + ", #" + idMinus5).animate(
				{width: 0, marginRight: 0}, 'slow'
			)).done(function() {
				$.when($("#issues_generated").children(
					"#" + idPlus1 + ", #" + idPlus2 + ", #" + idPlus3 + ", #" + idPlus4 + ", #" + idPlus5 + "," +
					"#" + idMinus1 + ", #" + idMinus2 + ", #" + idMinus3 + ", #" + idMinus4 + ", #" + idMinus5
				).animate(
					{opacity:1}
				)).done(function() {
					loadIssue(callingEvent.data);
				});
			});
		});
		
		// Show empty elements
		//$(".issues_array_empty").show();
		// Special cases: just two empty elements are visible
		/*
		if (prevId === undefined) {
			$(".issues_array_empty").first().clone()
				.addClass("issues_array_empty_remove")
				.on("click", transformMiniSelectorToIssueSelector)
				.insertBefore(".issues_array_empty:first");
		} else if (nextId === undefined) {
			$(".issues_array_empty").first().clone()
				.addClass("issues_array_empty_remove")
				.on("click", transformMiniSelectorToIssueSelector)
				.insertAfter(".issues_array_empty:last");
		}*/
	};

	var renderIssueSelector = function() {
		var thumbs_path = "/img/issue_selector/";
		var partialRendered; // counter used for incremental id values
		var partial; // name of the partial without heading underscore

		partialRendered = 0;
		partial = "issue";
		
		// Render all issues of all magazines	
		for (var magazine = 0; magazine < magazinesData.length; magazine++) {
			for (var issue = 0; issue < magazinesData[magazine].issues.length; issue++) {
				partialRendered++;
				var imagePath = thumbs_path + magazinesData[magazine].name.replace(/[^a-z0-9]/gi, '').toLowerCase()
				+ "/" + magazinesData[magazine].issues[issue].sequence + ".jpg"
				
				$("#_" + partial).clone()
					.attr("id", partial + partialRendered)
					.find("img").attr("data-original", imagePath)
					.end()
					.find("#issue_array_overlay").attr("id", "issue_array_overlay" + partialRendered)
					.end()
					.find(".issue_array_overlay_number").html(magazinesData[magazine].issues[issue].sequence)
					.end()
					.find(".issue_array_info_month").html(magazinesData[magazine].issues[issue].month)
					.end()
					.find(".issue_array_info_year").html(magazinesData[magazine].issues[issue].year)
					.end()
					.on("click", {"issue": magazinesData[magazine].issues[issue].id}, loadIssueFromSelectorEvent)
					.appendTo("#" + partial + "s_generated");
				}
		}
		// Hide all issue's overlays
		$(".issue_array_overlay_style").hide()
		// Setup issues events
		$(".issues_array_issue")
		.on("mouseover", function() {
				$(this).find(".issue_array_overlay_style").show();
		})
		.on("mouseleave", function() {
				$(this).find(".issue_array_overlay_style").hide();
		});
		
		// Hide all partials
		$("#_" + partial).hide(); // Partial ids start with an underscore
		
		// Go live
		$("#scan_loader").hide();
		$("#issue_selector").show();
		
		// Activate scan images lazy loading
		$("#" + partial + "s_generated img.lazy").show().lazyload({
			threshold: 100,
			effect : "fadeIn"
		});
	};

	var renderIssue = function() {
		var thumbs_path = "/img/thumbs/";
		var partialRendered; // counter used for incremental id values
		var partial; // name of the partial without heading underscore
		var container = "pages";
		//
		// Render pages
		//
		partialRendered = 0;
		partial = "double_page";
		// Clean-up
		$("#" + container).hide();
		$("#_" + partial).show();
		$("#" + partial + "s_generated").empty();
		
		// Cover
		$("#_" + partial).clone()
			.attr("id", partial + partialRendered++)
			.find("img").first().attr("data-original", thumbs_path + issueData.volumes[0].pages[0].scan.path)
			.end()
			.addClass("first")
			.end()
			.find(".doublepage a")
			.on("click", {"l": -1, "r": 0}, callReader)
			.end()
			.find("#_scan_author").attr("id", "_in_place_scan_author")
			.end()
			.find("#scan_authors_generated").attr("id", "in_place_scan_authors_generated")
			.end()
			.appendTo("#" + partial + "s_generated");
		// Remove unused image
		$("#" + partial + "s_generated").children().first().find("img").last().remove();
		
		
		// Double pages
		for (var i = 1; i < (issueData.volumes[0].pages_number - 1); i=i+2) {
			$("#_" + partial).clone()
				.attr("id", partial + partialRendered++)
				.find("img").first().attr("data-original", thumbs_path + issueData.volumes[0].pages[i].scan.path)
				.end().end()
				.find("img").last().attr("data-original", thumbs_path + issueData.volumes[0].pages[(i + 1)].scan.path)
				.end().end()
				.find(".doublepage a")
				.on("click", {"l": i, "r": i + 1}, callReader)
				.end()
				.find(".issue_info").remove()
				.end()
				.appendTo("#" + partial + "s_generated");
		}
		
		// Backcover
		$("#_" + partial).clone()
			.attr("id", partial + partialRendered++)
			.find("img").first().attr("data-original", thumbs_path + issueData.volumes[0].pages[(issueData.volumes[0].pages_number - 1)].scan.path)
			.end()
			.end()
			.find(".doublepage a")
			.on("click", {"l": issueData.volumes[0].pages_number - 1, "r": issueData.volumes[0].pages_number}, callReader)
			.end()
			.find(".issue_info").remove()
			.end()
			.appendTo("#" + partial + "s_generated");
		// Remove unused image
		$("#" + partial + "s_generated").children().last().find("img").last().remove();

		$("#_" + partial).hide();
			
		// Render issue info
		$(".issue_number").html(issueData.sequence);
		$(".issue_month").html(locales.months[issueData.month - 1]);
		$(".issue_year").html(issueData.year);
		$(".issue_editor").html(issueData.editor.name);
			
		//
		// Render scan authors
		//
		renderScanAuthors();
		
		// Go live
		$("#scan_loader").hide();
		$("#" + container).show();
		
		// Activate scan images lazy loading
		$("#double_pages_generated img.lazy").show().lazyload({
			threshold: 200,
			effect : "fadeIn"
		});
	};

	var renderScanAuthors = function() {
		var partialRendered; // counter used for incremental id values
		var partial; // name of the partial without heading underscore
		
		partialRendered = 0;
		partial = "in_place_scan_author";
		for (var i = 0; i < issueData.volumes[0].scan_authors.length; i++) {
			$("#_" + partial).clone()
				.attr("id", partial + partialRendered++)
				.attr("href", "../author/" + issueData.volumes[0].scan_authors[i].name)
				.html(issueData.volumes[0].scan_authors[i].name)
				.appendTo("#" + partial + "s_generated");
		}
		
		$("#_" + partial).hide();
	};

	// Show Reader without an event call
	// page: real page number (1..last page) 
	var showReader = function(page) {
		var pages = {};
		if (page %2 == 0) {
			pages.l = page - 1; // "page" position array
			pages.r = page;			// next page
		} else {
			pages.l = page - 2;	// previous page
			pages.r = page - 1; // "page" position in array
		}
		renderReader(pages);
	};

	// Show Reader from an event call
	var callReader = function(event) {
		renderReader(event.data);
	};

	// Show and initialiaze Reader
	var renderReader = function(data){
		var pages_path = "/"; //"/img/scans/";
		var isCover = (data.r == 0);
		var isBackcover = (data.l == issueData.volumes[0].pages_number - 1);
		var loaderUnload;
		
		$("#scan_loader").show();
		
		// Reset Reader
		$("#reader_left,#reader_right").attr("src", "").off("click", callReader).hide();
		$("#reader_content").removeClass("double");
		$("#reader_left").off("load");
		$("#reader_right").off("load");
		
		//Reset Reader position just por single pages to avoid scroll jump on page change
		if (isCover || isBackcover) {
			$("#reader_content").css("margin-top", 0).css("margin-left", 0);
			loaderUnload = loaderSetter(1);
		} else {
			loaderUnload = loaderSetter(2);
		}
		
		// Setup infos
		$("#reader_info_magazine").html("<strong>Zzap!</strong> numero " + issueData.sequence + " - " + locales.months[issueData.month - 1] + " " + issueData.year);
		
		// Setup new images
		if (!isCover) {
			$("#reader_left").on('load', function() { 
				loaderUnload();
			});
			$("#reader_left").attr("src", pages_path + issueData.volumes[0].pages[data.l].scan.path)
				.on("click", {"l": data.l - 2, "r": data.r - 2}, callReader).show();
		}
		if (!isBackcover) {
			$("#reader_right").on('load', function() { 
				loaderUnload();
			});
			$("#reader_right").attr("src", pages_path + issueData.volumes[0].pages[data.r].scan.path)
				.on("click", {"l": data.l + 2, "r": data.r + 2}, callReader).show();
		}
		
		// Set two page visualization if needed and pages number/name
		if (isCover) {
			$("#reader_info_pages").html("Copertina");
		} else if (isBackcover) {
			$("#reader_info_pages").html("Quarta di copertina");
		} else {
			$("#reader_content").addClass("double");
			$("#reader_info_pages").html(issueData.volumes[0].pages[data.l].label + " - " + issueData.volumes[0].pages[data.r].label);
		}

		// Go live
		$("#pages").hide();
		$("#reader").show();
		$("#reader_navigator").show();
		return false;
	};

	// Reader close event
	var closeReader = function(){
		// If Issue wasn't rendered
		if($("#double_pages_generated").children().length == 0) {
			renderIssue();
		}
		$("#reader").hide();
		$("#pages").show();
	};

	var readerKeyboardEventHandler = function(e) {
			if ($("#reader").is(':visible')) {
				switch (e.which) {
					case 27: closeReader(); // esc
					break;
					case 37: // left arrow
						$("#reader_left").trigger("click");
						break;
					case 39: // right arrow
						$("#reader_right").trigger("click");
						break;
				}
			}
	};

	var readerContentScroll = function(e) {
		//var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
		//var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
		
		$("#reader_navigator").fadeIn('fast');
					
		var overflowX = $("#reader_content").width() - $(window).width();
		var relativeX = e.clientX - ($(window).width() / 2);
		
		// Scroll only if content is larger than container
		if (overflowX > 0) {
			if (Math.abs(relativeX * 2) < overflowX / 2) {
			$("#reader_content").css("margin-left", -(relativeX * 2 + (overflowX / 2)));
			} else {
				if (relativeX > 0) {
					$("#reader_content").css("margin-left", - overflowX);
				} else {
					$("#reader_content").css("margin-left", 0);
				}
			}
		}
		
		var overflowY = $("#reader_content").height() - $(window).height();
		var relativeY = e.clientY - ($(window).height() / 2);
		
		// Scroll only if content is larger than container
		if (overflowY > 0) {
			if (Math.abs(relativeY * 2) < overflowY / 2) {
				$("#reader_content").css("margin-top", -(relativeY * 2 + (overflowY / 2)));
			} else {
				if (relativeY > 0) {
					$("#reader_content").css("margin-top", - overflowY);
				} else {
					$("#reader_content").css("margin-top", 0);
				}
			}
		}  
	};

	var validatePage = function(page) {
		var valid = false;
		if (issueData !== undefined) {
			if (page !== undefined) {
				if (page >= 1 && page <= issueData.volumes[0].pages_number) {
					valid = true;
				}
			}
		}
		return valid;
	};

	// Avoid global variable
	function loaderSetter(numberOfElements) {
		var elementsToLoad;
		elementsToLoad = numberOfElements;
		return function () {
			elementsToLoad = elementsToLoad - 1;
			if (elementsToLoad <= 0) {
				$("#scan_loader").hide();
			}
		}
	}

	$(document).ready(() => {
		initScans();
	});
})();
