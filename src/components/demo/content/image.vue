<template>
  <content-container
    title="Le abbiamo viste tutte, di Paolo Besser"
    anchor="speciali-leabbiamovistetutte">

    <content-image
      :image-path="resolveAssetPath(`speciali/leabbiamovistetutte/numero43.jpg`)"
    />

    <content-image
      :image-path="resolveAssetPath(`speciali/leabbiamovistetutte/numero43.jpg`)"
      link-url="#"
      caption="Centred and linked"
    />

    <content-image
      :image-path="resolveAssetPath(`speciali/leabbiamovistetutte/numero43.jpg`)"
      rotation="cw"
      caption="Centred CW"
    />

    <content-image
      :image-path="resolveAssetPath(`speciali/leabbiamovistetutte/numero43.jpg`)"
      caption="Centred CC"
      rotation="cc"
    />

    <content-image
      :image-path="resolveAssetPath(`speciali/leabbiamovistetutte/numero43.jpg`)"
      caption="Centred with long caption, la splendida protagonista di &quot;Insects is Space&quot;
        creata da Sensible Software"
    />

    <content-section title="Le origini">
      <p>Gli articoli storici sono sempre un’occasione d’oro per vanagloriarsi,
      giacché ognuno di noi normalmente vive le proprie giornate senza la pretesa,
      un giorno, di ripercorrerle col pensiero e di riportarle da qualche parte.
      A meno che, ovviamente, debba scrivere un’autobiografia.</p>
    </content-section>

    <content-image
      :image-path="resolveAssetPath(`speciali/leabbiamovistetutte/numero43.jpg`)"
      link-url="#"
      caption="Centred, linked, between sections"
    />

    <content-section title="Il seguito">
      <p>Gli articoli storici sono sempre un’occasione d’oro per vanagloriarsi,
      giacché ognuno di noi normalmente vive le proprie giornate senza la pretesa,
      un giorno, di ripercorrerle col pensiero e di riportarle da qualche parte.
      A meno che, ovviamente, debba scrivere un’autobiografia.
      E questo tipo di manoscritti, per quanto affascinante, è sempre filtrato dai
      ricordi, dalle emozioni vissute, dal desiderio di rimediare gli errori
      compiuti, dalla voglia di giustificazione o di riscatto.
      Parlare della rivista per cui si lavora, per fortuna, è sostanzialmente
      diverso: ciò ch’è stato è stato, da qualche parte rimarrà scritto,
      e troverai sempre il vecchio lettore pronto a contraddirti,
      e poi c’è quella parte visibile, oggettiva, che rimarrà a tutti gli effetti
      l’unica cosa che la gente ricorderà. Perché in fondo chi scrive non lo fa
      solo per informare, ma anche nella speranza che qualcosa di suo rimanga in
      eterno.</p>
    </content-section>

    <content-section title="Le origini">
      <p>
        <content-image
          :image-path="resolveAssetPath(`speciali/leabbiamovistetutte/numero43.jpg`)"
          rotation="cw"
          caption="Centred, CW, at the beginning of a paragraph"
        />
        Nella primavera del 1986, facevo ancora la seconda media. Guardavo il mondo con
        gli occhi lucidi del bambino, e potevo considerarmi il felice utente di un
        Commodore 16, nonostante gli sfottò degli allora possessori di un C64 onestamente
        bruciassero... Avevano tutti i giochi di questo mondo, loro, e riuscivano a
        procurarseli con una facilità davvero incredibile. Erano i tempi della pirateria
        da edicola, e di seguire mensilmente una pubblicazione, ovviamente come lettore,
        nemmeno se ne parlava: come per la maggior parte dei bambini di allora, erano i
        genitori a stabilire se fosse il caso d’investire quelle poche lire in una nuova
        "cassettina" per il computer, strumento per altro visto con diffidenza e disprezzo,
        eppure, ciò non m’impedì di leggere qualche numero di VideoGiochi, a tutti gli
        effetti la prima rivista italiana dedicata espressamente all’argomento. Ricordo
        che la curava lo Studio Vit, all’epoca legato al Gruppo Editoriale Jackson, e che
        improvvisamente le uscite della testata iniziarono a perdere in fatto di regolarità.
        Non me ne rendevo conto, ma era già finita un’epoca, e i videogiocatori un po’ più
        grandicelli si apprestavano a seguire le evoluzioni del mercato su una nuova rivista,
        "edizione italiana" di quella "inglese più venduta": Zzap!.</p>
    </content-section>

    <content-section title="Le origini">
      <p>
        <content-image
          :image-path="resolveAssetPath(`speciali/leabbiamovistetutte/numero43.jpg`)"
          caption="Left, at the beginning of a paragraph"
          align="left"
        />
        Nella primavera del 1986, facevo ancora la seconda media. Guardavo il mondo con
        gli occhi lucidi del bambino, e potevo considerarmi il felice utente di un
        Commodore 16, nonostante gli sfottò degli allora possessori di un C64 onestamente
        bruciassero... Avevano tutti i giochi di questo mondo, loro, e riuscivano a
        procurarseli con una facilità davvero incredibile. Erano i tempi della pirateria
        da edicola, e di seguire mensilmente una pubblicazione, ovviamente come lettore,
        nemmeno se ne parlava: come per la maggior parte dei bambini di allora, erano i
        genitori a stabilire se fosse il caso d’investire quelle poche lire in una nuova
        "cassettina" per il computer, strumento per altro visto con diffidenza e disprezzo,
        eppure, ciò non m’impedì di leggere qualche numero di VideoGiochi, a tutti gli
        effetti la prima rivista italiana dedicata espressamente all’argomento. Ricordo
        che la curava lo Studio Vit, all’epoca legato al Gruppo Editoriale Jackson, e che
        improvvisamente le uscite della testata iniziarono a perdere in fatto di regolarità.
        Non me ne rendevo conto, ma era già finita un’epoca, e i videogiocatori un po’ più
        grandicelli si apprestavano a seguire le evoluzioni del mercato su una nuova rivista,
        "edizione italiana" di quella "inglese più venduta": Zzap!.</p>

      <p>
        <content-image
          :image-path="resolveAssetPath(`speciali/leabbiamovistetutte/numero43.jpg`)"
          caption="Right, linked, at the beginning of a paragraph"
          align="right"
          link-url="#"
        />
        Zzap! uscì in sordina, nel lontano maggio del 1986, tanto in sordina che non tutte
        le edicole ne furono provviste. Tant’è che il mio primo contatto con la nuova
        pubblicazione avvenne solo otto mesi più tardi, nel dicembre dello stesso anno:
        il mio C16 fu soppiantato a Natale da un più potente Commodore 128, e finalmente mi
        mettevo nelle condizioni di "recuperare" tutto il tempo perduto: VideoGiochi si era
        nel frattempo trasformata in VideoGiochi News e aveva fatto in tempo a morire per
        la seconda volta, e improvvisamente tra le tante pubblicazioni dedicate all’argomento
        "computer" intravidi un logo nuovo e attraente, quello stesso che capeggia tuttora
        sulle copertine disegnate da Vera Gentinetta: Zzap!. Più che una parola, un sibilo.
        Il verso dei laser. Ci misi gli anni a capire come diavolo si pronunciasse, ma dopo
        sole poche ore quella sarebbe diventata la "mia" rivista, quella per la quale avrei
        rotto le balle all’edicolante ogni santo mese, "è uscito Zzap!?", un leitmotiv a
        cui si saranno abituati in tanti.</p>
      <p>Solo in seguito riuscii a recuperare i sei numeri che mancavano alla mia collezione:
      cinque mi giunsero in arretrato, ma per il primo dovetti aspettare molti anni più
      tardi, a rivista ormai defunta, quando un intraprendente lettore di Consolemania me
      lo spedì in regalo.</p>
    </content-section>

    <content-section title="Le origini">
      <p>
        <content-image
          :image-path="resolveAssetPath(`speciali/leabbiamovistetutte/numero43.jpg`)"
          caption="Left, CC, at the beginning of a paragraph"
          align="left"
          rotation="cc"
        />
        Nella primavera del 1986, facevo ancora la seconda media. Guardavo il mondo con
        gli occhi lucidi del bambino, e potevo considerarmi il felice utente di un
        Commodore 16, nonostante gli sfottò degli allora possessori di un C64 onestamente
        bruciassero... Avevano tutti i giochi di questo mondo, loro, e riuscivano a
        procurarseli con una facilità davvero incredibile. Erano i tempi della pirateria
        da edicola, e di seguire mensilmente una pubblicazione, ovviamente come lettore,
        nemmeno se ne parlava: come per la maggior parte dei bambini di allora, erano i
        genitori a stabilire se fosse il caso d’investire quelle poche lire in una nuova
        "cassettina" per il computer, strumento per altro visto con diffidenza e disprezzo,
        eppure, ciò non m’impedì di leggere qualche numero di VideoGiochi, a tutti gli
        effetti la prima rivista italiana dedicata espressamente all’argomento. Ricordo
        che la curava lo Studio Vit, all’epoca legato al Gruppo Editoriale Jackson, e che
        improvvisamente le uscite della testata iniziarono a perdere in fatto di regolarità.
        Non me ne rendevo conto, ma era già finita un’epoca, e i videogiocatori un po’ più
        grandicelli si apprestavano a seguire le evoluzioni del mercato su una nuova rivista,
        "edizione italiana" di quella "inglese più venduta": Zzap!.</p>

      <p>
        <content-image
          :image-path="resolveAssetPath(`speciali/leabbiamovistetutte/numero43.jpg`)"
          caption="Right,CW, linked, at the beginning of a paragraph"
          align="right"
          rotation="cw"
          link-url="#"
        />
        Zzap! uscì in sordina, nel lontano maggio del 1986, tanto in sordina che non tutte
        le edicole ne furono provviste. Tant’è che il mio primo contatto con la nuova
        pubblicazione avvenne solo otto mesi più tardi, nel dicembre dello stesso anno:
        il mio C16 fu soppiantato a Natale da un più potente Commodore 128, e finalmente mi
        mettevo nelle condizioni di "recuperare" tutto il tempo perduto: VideoGiochi si era
        nel frattempo trasformata in VideoGiochi News e aveva fatto in tempo a morire per
        la seconda volta, e improvvisamente tra le tante pubblicazioni dedicate all’argomento
        "computer" intravidi un logo nuovo e attraente, quello stesso che capeggia tuttora
        sulle copertine disegnate da Vera Gentinetta: Zzap!. Più che una parola, un sibilo.
        Il verso dei laser. Ci misi gli anni a capire come diavolo si pronunciasse, ma dopo
        sole poche ore quella sarebbe diventata la "mia" rivista, quella per la quale avrei
        rotto le balle all’edicolante ogni santo mese, "è uscito Zzap!?", un leitmotiv a
        cui si saranno abituati in tanti.</p>
      <p>Solo in seguito riuscii a recuperare i sei numeri che mancavano alla mia collezione:
      cinque mi giunsero in arretrato, ma per il primo dovetti aspettare molti anni più
      tardi, a rivista ormai defunta, quando un intraprendente lettore di Consolemania me
      lo spedì in regalo.</p>
    </content-section>
  </content-container>
</template>

<script src="./image.js"></script>
