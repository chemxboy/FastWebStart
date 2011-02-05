// ------------------------------------ This is our GOLD ------------------------------------ //
var SITES = [ 
	{title: 'RECHERCHE', data : [
	{href:'http://www.google.fr', result:'http://www.google.fr/#&amp;q={R}', tips:'Moteur de recherche', title:'<strong>Google</strong>'},
	{href:'http://images.google.fr', result:'http://images.google.fr/images?hl=fr&amp;q={R}', tips:'La recherche d\'images la plus complète sur le Web', title:'<strong>Images</strong>'},
	//{href:'http://www.google.com/musicsearch?q=&amp;btnG=Search+Music', result:'http://www.google.com/musicsearch?q={R}', tips:'Moteur de recherche de musique', title:'Musique'},
	{href:'http://image-swirl.googlelabs.com', result:'http://image-swirl.googlelabs.com/html?q={R}', tips:'Moteur de recherche expérimentale d\'images', title:'Swirl'},
	{href:'http://www.google.com/realtime/', result:'http://www.google.com/search?tbs=mbl%3A1&btnG=Rechercher&q={R}', tips:'Recherche en temps r&eacute;&eacute;l (Discussion, Twitter, ...)', title:'RealTime'},
	{href:'http://translate.google.fr/', result:'http://translate.google.fr/translate_t?hl=fr&amp;q={R}', tips:'Permet de traduire instantanément du texte et des pages Web', title:'Traductions'},
	{href:'http://video.google.fr', result:'http://video.google.fr/videosearch?hl=fr&amp;q={R}', tips:'Moteur de recherche de vidéos', title:'Vidéos'}
	]}, {title: 'SOCIAL', data : [
	{href:'http://www.google.com/calendar', result:'', tips:'L\'agenda en ligne de Google', title:'<strong>Agenda</strong>'},
	{href:'http://www.google.com/contacts', result:'', tips:'Vos contacts googles (Gmail, Docs, ...)', title:'Contacts'},
	{href:'http://mail.google.com/mail', result:'https://mail.google.com/mail/?#search/{R}', tips:'Gmail: Email by Google', title:'<strong>Gmail</strong>'},
	{href:'http://www.google.com/profiles?q=', result:'http://www.google.com/profiles?q={R}', tips:'Administrer votre profil google', title:'ProfileBuzz'},
	{href:'http://wave.google.com', result:'https://wave.google.com/wave/#restored:result:{R}', tips:'Communicate and collaborate in real time', title:'Wave'}
	]}, {title: 'CARTES', data : [
	{href:'http://www.google.com/adresses', result:'', tips:'Administrez vos adresses sur google maps', title:'Adresses'},
	{href:'http://maps.google.fr', result:'http://maps.google.fr/maps?hl=fr&amp;q={R}', tips:'Affichez des plans et calculez des itinéraires routiers', title:'<strong>Maps</strong>'},
	{href:'http://maps.google.fr/gadgets/directory?synd=mpl&amp;hl=fr', result:'http://maps.google.fr/gadgets/directory?synd=mpl&amp;hl=fr&amp;gl=&amp;q={R}', tips:'Addons pour Google Maps', title:'MapsPlugins'},
	{href:'http://www.google.com/latitude', result:'', tips:'Partager vos informations de localisation', title:'Latitude'},
	{href:'http://www.panoramio.com', result:'http://www.panoramio.com/map/?tag={R}', tips:'Photo-sharing community. Discover the world through satellite photos', title:'Panoramio'},
	{href:'http://www.google.com/sky/', result:'', tips:'Google Sky, explorez le ciel', title:'Sky'}
	]}, {title: 'MEDIAS', data : [
	{href:'https://docs.google.com', result:'http://docs.google.com/?#search/{R}', tips:'Create and edit web-based documents, spreadsheets, and presentations', title:'<strong>Documents</strong>'},
	{href:'http://picasaweb.google.fr', result:'http://picasaweb.google.fr/lh/view?q={R}', tips:'Consulter, organiser, retoucher et partager vos photos', title:'<strong>Picasa</strong>'},
	{href:'http://www.google.fr/reader', result:'http://www.google.com/reader/view/?tab=Cy#search/{R}', tips:'Lecteur de flux RSS pour suivre l\'actu de vos sites préférés', title:'<strong>Reader</strong>'},
	{href:'http://www.youtube.com', result:'http://www.youtube.com/results?hl=fr&amp;q={R}', tips:'Broadcast Yourself.', title:'<strong>YouTube</strong>'},
	//{href:'http://www.youtube.com/disco', result:'', tips:'Youtube Music Discovery Project (Disco)', title:'YouTubeMusic'},
	{href:'http://www.youtube.com/leanback', result:'', tips:'Google TV Beta Interface with Youtube videos', title:'LeanBack'}
	]}, {title: 'ACTUS', data : [
	{href:'http://news.google.fr', result:'http://news.google.fr/news?hl=fr&amp;q={R}', tips:' Offre une compilation d\'articles publiés par un grand nombre de sources', title:'<strong>Actualités</strong>'},
	{href:'http://fastflip.googlelabs.com', result:'http://fastflip.googlelabs.com/?hl=fr&amp;q={R}', tips:'Feuilletez rapidement l\'actualité', title:'FastFlip'},
	{href:'http://www.google.com/squared', result:'http://www.google.com/squared/search?q={R}', tips:'Construire un tableau avec des éléments à comparer', title:'Squared'},
	{href:'http://www.google.com/insights/search/', result:'http://www.google.com/insights/search/#q={R}&amp;cmpt=q', tips:'Comparer les tendances des volumes de recherche par région, catégorie, période et site', title:'Tendance'},
	{href:'http://newstimeline.googlelabs.com', result:'http://newstimeline.googlelabs.com/?hl=fr&amp;q={R}', tips:'Web application that organizes information chronologically', title:'Timeline'}
	]}, {title: 'PORTAILS', data : [
	{href:'http://www.google.com/alerts', result:'http://www.google.com/alerts/manage?hl=fr&amp;q={R}', tips:'Etre averti par e-mail lorsque de nouveaux articles sont publiés avec des termes que vous recherchez', title:'Alertes'},
	{href:'http://www.google.com/bookmarks', result:'http://www.google.com/bookmarks/find?hl=fr&amp;q={R}', tips:'Vos favoris en ligne', title:'Bookmarks'},
	{href:'http://groups.google.fr', result:'http://groups.google.fr/groups?q={R}', tips:'Service de groupe de discussion (Email, Usenet)', title:'Groupes'},
	{href:'http://www.googlelabs.com/', result:'http://www.googlelabs.com/?q={R}&amp;apps=Search+Labs', tips:'Testez toutes les experiences des Google Labs en ligne', title:'GoogleLabs'},
	{href:'http://www.google.com/ig', result:'', tips:'iGoogle est votre page Google personnalisée', title:'iGoogle'},
	{href:'http://www.google.com/s2/search/social', result:'', tips:'Social Search', title:'Social'}
	]}, {title: 'THEMES', data : [
	{href:'http://blogsearch.google.fr', result:'http://blogsearch.google.fr/blogsearch?hl=fr&amp;q={R}', tips:'Recherche spécifique dans les blog', title:'<strong>Blogs</strong>'},
	{href:'http://code.google.com', result:'ttp://code.google.com/intl/fr-FR/search/#q={R}', tips:'Google Project Hosting', title:'<strong>Code</strong>'},
	{href:'http://www.google.com/dictionary?aq=f&amp;langpair=fr%7Cfr&amp;q=&amp;hl=fr', result:'http://www.google.com/dictionary?aq=f&amp;langpair=fr|fr&amp;q={R}&amp;hl=fr', tips:'Recherche de définition', title:'Dictionnaire'},
	{href:'http://books.google.fr', result:'http://books.google.fr/books?hl=fr&amp;q={R}', tips:'Recherche spécifique dans les livres', title:'Livres'},
	{href:'http://www.google.com/prdhp', result:'http://www.google.com/products?q={R}', tips:'Recherche de produits', title:'Produits'},
	{href:'http://scholar.google.com', result:'http://scholar.google.fr/scholar?hl=fr&amp;q={R}', tips:'Recherche étendue sur des travaux universitaires', title:'Scholar'}
	]}, {title: 'SITES', data : [
	{href:'https://www.google.com/adsense', result:'', tips:'Monétisation de site', title:'Adsense'},
	{href:'https://www.google.com/analytics', result:'', tips:'Analyse d\'audience Internet', title:'Analytics'},
	{href:'http://www.blogger.com', result:'', tips:'Outil de publication de blogs', title:'Blogger'},
	{href:'https://www.google.com/dashboard/?pli=1', result:'', tips:'Summary of the data stored with a Google account', title:'Dashboard'},
	{href:'http://www.google.fr/trends', result:'http://www.google.fr/trends?q={R}', tips:'Mesurer l\'intensité des requêtes sur un mot', title:'Marques'},
	{href:'http://sites.google.com', result:'', tips:'Outil de création de site', title:'Sites'}
	]}, {title: 'RECHERCHE', data : [
	{href:'http://www.seeks.fr', result:'http://www.seeks.fr/search?q={R}', tips:'Seeks is a free and open P2P design and application for enabling social websearch', title:'Seeks'},
	{href:'https://www.scroogle.fr', result:'', tips:'Moteur de recherche anonyme et sécurisé (https)', title:'Scroogle'},
	{href:'http://www.bing.com', result:'http://www.bing.com/search?q={R}', tips:'Moteur de recherche par Microsoft', title:'Bing'},
	{href:'http://www.btjunkie.org', result:'http://btjunkie.org/search?q={R}', tips:'Moteur de recherche de fichier .torrents', title:'BTjunkie'},
	{href:'http://demos.labs.exalead.com/constellations/', result:'http://demos.labs.exalead.com/constellations/?q={R}', tips:'Moteur de recherche de "contellastion" de sites', title:'Constellations'},
	//{href:'http://www.dlmon.com', result:'http://www.dlmon.com/find/{R}.html', tips:'Moteur de recherche Rapidshare et Megaupload', title:'DlMonster'},
	{href:'http://www.exalead.fr', result:'http://www.exalead.fr/search/web/results/?q={R}', tips:'Moteur de recherche Français', title:'<strong>Exalead</strong>'},
	{href:'http://www.gammafiles.com', result:'http://www.gammafiles.com/{R}', tips:'Moteur de recherche Rapidshare et Megaupload', title:'GammaFiles'},
	{href:'http://www.pagesjaunes.fr', result:'', tips:'Annuaire téléphonique fixe', title:'PagesJaunes'},
	{href:'http://www.rapidlibrary.com/', result:'http://rapidlibrary.com/index.php?q={R}', tips:'Moteur de recherche Rapidshare et Megaupload', title:'RapidLibrary'},
	{href:'http://www.spezify.com', result:'http://www.spezify.com/#/{R}', tips:'Moteur de recherche visuel et tactile', title:'Spezify'},
	{href:'http://www.torrentreactor.net', result:'http://www.torrentreactor.net/search.php?words={R}', tips:'Moteur de recherche de fichier .torrents', title:'TorrentReactor'},
	{href:'http://www.viewzi.com', result:'http://www.viewzi.com/search/power_grid/{R}', tips:'Moteur de recherche intéractif', title:'Viewzi'},
	{href:'http://fr.wikipedia.org', result:'http://fr.wikipedia.org/wiki/{R}', tips:'L\'encyclopédie libre', title:'Wikipédia'},
	{href:'http://www.wolframalpha.com', result:'http://www.wolframalpha.com/input/?i={R}', tips:'Encyclopédie de connaissance systématique immédiatement calculable', title:'<strong>WolframAlpha</strong>'},
	{href:'http://www.yahoo.com', result:'http://fr.search.yahoo.com/search?p={R}', tips:'Actualités, moteur de recherche, email gratuit, communautés', title:'Yahoo!'},
	{href:'http://fr.yauba.com', result:'http://fr.yauba.com/?q={R}&amp;target=all', tips:'Moteur de recherche anonyme (Inde), fonctionnant en temps réel', title:'<strong>Yauba</strong>'}
	]}, {title: 'SOCIAL', data : [
	{href:'http://www.badoo.com', result:'', tips:'C\'est le meilleur point de rencontre', title:'Badoo!'},
	//{href:'http://brightkite.com', result:'', tips:'The simple way to keep up with friends &amp; places', title:'Brightkite'},
	{href:'http://www.facebook.com/', result:'http://www.facebook.com/search/?q={R}', tips:'Rester en contact et d\'échanger avec les personnes qui vous entourent', title:'<strong>Facebook</strong>'},
	{href:'http://foursquare.com', result:'http://foursquare.com/search?q={R}', tips:'Meet up with your friends and explore the city', title:'Foursquare'},
	{href:'http://www.hellotxt.com', result:'', tips:'Save time managing your status update for all your social networks', title:'HelloTxt'},
	{href:'http://www.hi5.com', result:'http://www.hi5.com/friend/processBrowseSearch.do?&amp;searchText={R}', tips:'Tes amis, ton monde', title:'Hi5'},
	{href:'http://www.linkedin.com', result:'http://www.linkedin.com/search?pplSearchOrigin=GLHD&amp;keywords={R}&amp;search=', tips:'Trouvez les professionnels et l\'expertise dont vous avez besoin', title:'<strong>LinkedIn</strong>'},
	{href:'http://www.myspace.com', result:'http://searchservice.myspace.com/index.cfm?fuseaction=sitesearch.results&amp;type=People&amp;qry={R}&amp;submit=Chercher', tips:'MySpace, c\'est pour tous tes amis', title:'MySpace'},
	{href:'http://ping.fm', result:'', tips:'Post to all of your favorite services!', title:'<strong>Ping.fm</strong>'},
	{href:'http://www.plaxo.com', result:'http://www.plaxo.com/search/index?keywords={R}', tips:'Restez en contact avec vos proches', title:'Plaxo'},
	{href:'http://www.plurk.com', result:'', tips:'Plurk est un journal social pour votre vie', title:'Plurk'},
	{href:'https://www.rememberthemilk.com', result:'', tips:'Remember The Milk réinvente la liste de tâches', title:'Remember'},
	{href:'http://seesmic.com/app/', result:'', tips:'Conçu pour gérer facilement et construire votre communauté', title:'<strong>Seesmic</strong>'},
	{href:'http://www.skyrock.com/', result:'http://www.skyrock.com/search/username/?q={R}', tips:'Free people network', title:'Skyrock'},
	{href:'http://www.tumblr.com', result:'http://www.tumblr.com/tagged/{R}', tips:'La manière la plus facile de blogger', title:'TumblR'},
	{href:'http://twitter.com/', result:'http://search.twitter.com/search?q={R}', tips:'Partager et découvrir ce qui se passe', title:'<strong>Twitter</strong>'}
	]}, {title: 'CULTURE', data : [
	{href:'http://www.break.com', result:'http://my.break.com/Content/Search/Search.aspx?s={R}&amp;SearchType=Main&amp;SEARCH1=Search', tips:'Watch funny videos on Break.com', title:'Break'},
	{href:'http://www.4chan.org/frames/', result:'http://www.google.fr/webhp?hl=fr#q=site%3A4chan.org+{R}', tips:'There are boards dedicated to a variety of topics...', title:'4Chan'},
	{href:'http://www.axelibre.org', result:'http://www.google.fr/webhp?#q=site:axelibre.org+{R}', tips:'Le magazine des arts et des cultures', title:'@xéLibre'},
	{href:'http://www.avaaz.org/fr/', result:'http://www.google.fr/webhp?#q=site:avaaz.org+{R}', tips:'Rejoignez des gens du monde entier pour agir sur les enjeux mondiaux les plus urgents', title:'Avaaz'},
	{href:'http://www.bellaciao.org/fr/', result:'http://www.google.fr/webhp?#q=site:bellaciao.org+{R}', tips:'Collectif franco-italien. Actualité, agenda et analyses', title:'Bellaciao'},
	{href:'http://www.fluctuat.net', result:'http://recherche.fluctuat.net/?q={R}', tips:'Fluctuat/Arts, culture, société, poil à gratter', title:'Fluctuat'},
	{href:'http://www.fubiz.net/mosaic/', result:'http://www.fubiz.net/mosaic/?keys={R}', tips:'Daily dose of inspiration', title:'Fubiz'},
	{href:'http://www.gizmodo.fr', result:'http://www.gizmodo.fr/?s={R}', tips:'Le blog des Gadgets', title:'Gizmodo'},
	{href:'http://www.greenpeace.org', result:'http://www.greenpeace.org/international/footer/search?q={R}', tips:'L\'association Greenpeace dénonce les urgences écologiques', title:'GreenPeace'},
	{href:'http://www.journaldunet.com/', result:'http://www.journaldunet.com/recherche/?f_recherche={R}', tips:'Le Journal du Net', title:'JournalDuNet'},
	{href:'http://www.lequipe.fr', result:'http://www.lequipe.fr/recherche/search.php?r={R}', tips:'Toute l\'actualité sportive en direct', title:'LEquipe'},
	{href:'http://www.lesinrocks.com/', result:'http://www.google.fr/webhp?#q=site:axelibre.org+{R}', tips:'News culturel en ligne:actu, buzz, reportages, interviews, disques, films, concerts', title:'LesInrocks'},
	{href:'http://www.smashingmagazine.com', result:'http://www.google.fr/webhp?#q=site:smashingmagazine.com+{R}', tips:'We smash you with the information that will make your life easier', title:'SmashingMag'},
	{href:'http://www.techcrunch.com', result:'http://www.techcrunch.com/?s={R}', tips:'Tech, Gadgets, Mobile, Entreprise', title:'TechCrunch'},
	{href:'http://www.technikart.com', result:'http://www.technikart.com/component/search/{R}', tips:'Version web du magazine branché art et cultures', title:'Technikart'},
	{href:'http://www.telerama.fr', result:'http://recherche.telerama.fr/recherche/recherche.php?ecrivez={R}', tips:'L\'actualité culturelle en continu et toutes les critiques cinéma, télévision, programme télé, livres', title:'Telerama'},
	{href:'http://www.zdnet.fr', result:'http://www.zdnet.fr/rechercher/?query={R}', tips:'Business et Technologies', title:'ZDNet'},
	{href:'http://www.korben.info', result:'http://www.korben.info/index.php?s={R}', tips:'Actualité informatique high tech et geek', title:'<strong>Korben</strong>'}
	]}, {title: 'MEDIAS', data : [
	{href:'http://www.dailymotion.com', result:'http://www.dailymotion.com/relevance/search/{R}', tips:'Vidéo, musique et film. Regardez une vidéo maintenant !', title:'<strong>Dailymotion</strong>'},
	{href:'http://www.vimeo.com', result:'http://www.vimeo.com/videos/result:{R}', tips:'We provide the best tools and highest quality', title:'<strong>Vimeo</strong>'},
	{href:'http://www.megavideo.com', result:'http://www.megavideo.com/?c=search&amp;s={R}', tips:'I\'m watching it', title:'MegaVideo'},
	{href:'http://www.metatube.net', result:'', tips:'Browse 100 video sharing sites at once!!', title:'MetaTube'},
	{href:'http://www.idesktop.tv', result:'', tips:'Viewing &amp; Customization as it should be...', title:'iDesktop'},
	{href:'http://www.isofa.tv', result:'', tips:'Une nouvelle façon de regarder les vidéos ...', title:'iSofa'},
	{href:'http://www.arte.tv', result:'http://www.arte.tv/fr/recherche/1383954,templateId=noncache.html?doSearch=true&keyword={R}', tips:'Site de la chaine Arte', title:'ArteTV'},
	{href:'http://www.pluzz.fr', result:'http://www.pluzz.fr/recherche.html?q={R}', tips:'Voir ou revoir les programmes de France Télévisions', title:'Pluzz'},
	{href:'http://www.m6replay.fr', result:'', tips:'Site de la chaine M6', title:'M6replay'},
	{href:'http://www.canalplus.fr', result:'', tips:'Site de la chaine Canal+', title:'Canal+'},
	{href:'http://www.canalplay.com', result:'http://www.canalplay.com/pages/recherche/?search={R}', tips:'VOD le site de téléchargement de films et séries en vidéos', title:'CanalPlay'},
	{href:'http://www.webmaster-gratuit.com/tele', result:'', tips:'Sélectionnez une chaine de télévision et installez vous!', title:'TVenLigne'},
	{href:'http://www.johoo.tv', result:'http://www.johoo.tv/episodes.php?showname={R}', tips:'Watch your favorite TV Shows and Movies online', title:'Johoo'},
	{href:'http://www.deviantart.com', result:'http://www.deviantart.com/#order=9&amp;q={R}', tips:'When Art meet Deviation', title:'DeviantART'},
	{href:'http://www.flickr.com', result:'http://www.flickr.com/search/?q={R}', tips:'Partager vos photos. Explorer le monde', title:'FlickR'},
	{href:'http://www.gettyimages.com/Home.aspx', result:'http://www.gettyimages.com/Search/Search.aspx?contractUrl=2&amp;assetType=image&amp;family=creative&amp;phrase={R}', tips:'We are the leading provider of digital media', title:'Getty'},
	{href:'http://customize.org/wallpapers', result:'http://customize.org/browse/power?sort_type=public_at&amp;sort_order=DESC&amp;search={R}', tips:'Des images qui peuvent être définies comme fond d\'écran', title:'WallPapers'},
	]}, {title: 'ACTUS', data : [
	{href:'http://www.20minutes.fr', result:'', tips:'20minutes.fr, information en continu', title:'<strong>20Minutes</strong>'},
	{href:'http://www.agoravox.fr', result:'http://www.agoravox.fr/spip.php?page=recherche&recherche={R}', tips:'Le média citoyen', title:'AgoraVox'},
	{href:'http://www.april.org', result:'http://www.april.org/fr/search/node/{R}', tips:'Promouvoir et défendre le logiciel libre', title:'April'},
	{href:'http://www.2424actu.fr', result:'http://www.2424actu.fr/Search?keywords={R}', tips:'Retrouvez toutes les actualités les plus récentes', title:'2424Actu'},
	{href:'http://www.bakchich.info', result:'', tips:'Bakchich : informations, enquêtes et mauvais esprit', title:'Bakchich'},
	{href:'http://www.lemonde.fr', result:'', tips:'1er site d\'information. Les articles du journal et toute l\'actualité en continu', title:'<strong>LeMonde</strong>'},
	{href:'http://www.lepost.fr', result:'http://www.lepost.fr/recherche/resultat.html?tri=date&amp;query={R}', tips:'Suivez toute l\'actualité et le meilleur du Web', title:'<strong>LePost</strong>'},
	{href:'http://www.lexpress.fr', result:'', tips:'Toute l\'actualité et l\'information en direct, les infos politiques mais aussi internationales', title:'Lexpress'},
	{href:'http://www.liberation.fr', result:'http://www.liberation.fr/recherche/?q={R}', tips:'Quotidien français en ligne, dépêches, dossiers', title:'<strong>Libération</strong>'},
	{href:'http://www.marianne2.fr', result:'', tips:'Le site de l\'hebdomadaire Marianne', title:'Marianne2'},
	{href:'http://www.mediapart.fr', result:'http://www.mediapart.fr/search/apachesolr_search/{R}', tips:'Journal en ligne d\'information généraliste', title:'<strong>Mediapart</strong>'},
	{href:'http://newsmap.jp/#/b,e,m,n,s,t,w/fr/view', result:'http://newsmap.jp/#/b,e,m,n,s,t,w/fr/search/all/{R}/', tips:'Reflects the constantly changing landscape of the GoogleNews aggregator', title:'<strong>NewsMap</strong>'},
	{href:'http://www.nouvelobs.com', result:'http://recherche.nouvelobs.com/?q={R}', tips:'Actualité politique, sociale ou internationale', title:'NouvelObs'},
	{href:'http://www.france-ouest.com', result:'', tips:'Journal d\'Ouest France', title:'OuestFrance'},
	{href:'http://www.rue89.com', result:'', tips:'Site d\'information et de débat sur l\'actualité, indépendant et participatif', title:'<strong>Rue89</strong>'},
	{href:'http://www.slate.fr', result:'http://www.slate.fr/search/node/{R}', tips:'Slate Magazine', title:'Slate'}
	]}, {title: 'PORTAILS', data : [
	{href:'http://www.amazon.fr', result:'http://www.amazon.fr/s/ref=nb_ss?&amp;url=search-alias%3Daps&amp;field-keywords={R}', tips:'Achat et vente en ligne', title:'Amazon'},
	{href:'http://del.icio.us', result:'http://delicious.com/search?p={R}', tips:'The world\'s leading social bookmarking service', title:'Del.icio.us'},
	{href:'http://www.digg.com', result:'http://digg.com/search?s={R}', tips:'The best news, videos and pictures on the web as voted on by the Digg community', title:'Digg'},
	{href:'http://www.ebay.fr', result:'http://shop.ebay.fr/?&amp;_nkw={R}&amp;_sacat=See-All-Categories', tips:'Achetez et vendez vos objets neufs ou d\'occasion', title:'<strong>Ebay</strong>'},
	{href:'http://www.telemarket.fr', result:'http://www.telemarket.fr/dynv6/rechercheProduit.shtml?criteres={R}', tips:'1er Supermarché online', title:'Telemarket'},
	{href:'http://www.ooshop.com', result:'http://www.ooshop.com/WebForms/Catalogue/RechercheResult.aspx?MS={R}', tips:'Courses en ligne (Carrefour)', title:'Ooshop'},
	{href:'http://www.leboncoin.fr', result:'http://www.leboncoin.fr/li?q={R}', tips:'Trouvez la bonne affaire parmi 10 296 649 annonces', title:'<strong>LeBonCoin</strong>'},
	{href:'http://www.meebo.com', result:'', tips:'Connecting AIM, MSN, Yahoo, Facebook, MySpace messengers', title:'Meebo'},
	{href:'http://fr.msn.com', result:'', tips:'Accedez à vos services Windows Live Hotmail, MSN messenger', title:'MSN'},
	{href:'http://www.navigaya.com', result:'', tips:'Welcome to your new media system', title:'Navigaya'},
	{href:'http://www.netvibes.com', result:'http://www.netvibes.com/#Google_%3A_{R}', tips:'Page d\'accueil pour gérer votre vie numérique', title:'Netvibes'},
	{href:'http://www.scoopeo.com', result:'http://www.scoopeo.com/search?s={R}', tips:'Propose des actualités fournies et votées par les internautes', title:'Scoopeo'},
	{href:'http://www.stumbleupon.com', result:'http://www.stumbleupon.com/search?q={R}', tips:'Discovering and sharing web sites', title:'StumbleUpon'},
	{href:'http://www.technorati.com', result:'http://technorati.com/search/{R}?language=fr', tips:'Real-time search for user-generated media (including weblogs) by tag or keyword', title:'Technorati'},
	{href:'http://www.wikio.fr', result:'http://www.wikio.fr/search/{R}', tips:'L\'actu des blogs', title:'<strong>Wikio</strong>'},
	{href:'http://www.wordpress.com', result:'http://fr.search.wordpress.com/?q={R}', tips:'Blogs et plate-forme sémantique de publication personnelle', title:'Wordpress'}
	]}, {title: 'MUSIQUES', data : [
	{href:'http://www.bbc.co.uk/iplayer', result:'http://www.bbc.co.uk/iplayer/search/?q={R}', tips:'Catch up on the last 7 days of BBC TV &amp; Radio', title:'BBC'},
	{href:'http://www.deezer.com', result:'http://www.deezer.com/fr/#music/result/all/{R}', tips:'Musique à la demande', title:'<strong>Deezer</strong>'},
	{href:'http://www.di.fm', result:'', tips:'Electronic &amp; Dance Music Radio 24/7', title:'DI.fm'},
	{href:'http://www.dizzler.com', result:'http://www.dizzler.com/music/{R}', tips:'Listen to 15 million free songs', title:'Dizzler'},
	{href:'http://listen.grooveshark.com/', result:'http://listen.grooveshark.com/#/search/songs/?query={R}', tips:'Online music listening and playlists management', title:'Grooveshark'},
	{href:'http://www.ilike.com', result:'http://www.ilike.com/artist/search?artist_qp={R}', tips:'Leading social music service', title:'iLike'},
	{href:'http://www.jiwa.fr', result:'http://www.jiwa.fr/#search/track/{%22q%22%3A%22{R}%22}', tips:'Free the Music', title:'Jiwa'},
	{href:'http://justhearit.com', result:'', tips:'Search the web for any song in the world', title:'JustHearIt'},
	{href:'http://www.live365.com', result:'http://www.live365.com/cgi-bin/directory.cgi?searchdesc={R}', tips:'Thousands of Free Online Radio Stations', title:'Live365'},
	{href:'http://www.musicme.com', result:'', tips:'Site légal d\'écoute gratuite et de téléchargement en forfait illimité', title:'MusicMe'},
	{href:'http://musicovery.com', result:'', tips:'Discover new music based on your mood', title:'Musicovery'},
	{href:'http://www.novaplanet.com', result:'', tips:'Diffusion en ligne de Radio Nova', title:'NovaPlanet'},
	{href:'http://beta.play.fm', result:'http://www.play.fm/search?q={R}', tips:'Electronic &amp; Dance Music Online Streams', title:'<strong>Play.fm</strong>'},
	{href:'http://www.radiofg.com', result:'', tips:'Radio FG, la Radio FM Fashion &amp; Glam', title:'RadioFG'},
	{href:'http://www.shoutcast.com', result:'http://www.shoutcast.com/directory/search_results.jsp?searchCrit=simple&amp;s={R}', tips:'Radio stations from DJs and broadcasters around the world', title:'ShoutCast'},
	{href:'http://www.somafm.com', result:'', tips:'18 unique channels of listener-supported, commercial-free, underground/alternative radio', title:'SomaFM'},
	{href:'http://soundcloud.com', result:'http://soundcloud.com/tracks/search?q[fulltext]={R}', tips:'SoundCloud - We Move Music', title:'<strong>SoundCloud</strong>'}
	]}, {title: 'OUTILS', data : [
	{href:'http://www.allocine.fr', result:'http://www.allocine.fr/recherche/?motcle={R}', tips:'Cinéma, DVD, Séries TV et VOD', title:'<strong>Allocine</strong>'},
	{href:'http://www.programme-tv.net/programme/toutes-les-chaines/', result:'http://www.programme-tv.net/rechercher-programmes/{R}/', tips:'Programme télé de toutes les chaines françaises avec Télé Loisirs', title:'ProgrammeTV'},
	{href:'http://proxy.b2bweb.fr', result:'', tips:'Proxy de surf anonyme', title:'Anonyme'},
	{href:'http://www.bing.com/maps/explore/', result:'http://www.bing.com/maps/explore/#5003/0.6002=q:{R}', tips:'Bing Map Explorer', title:'BingMaps'},
	{href:'http://www.bugmenot.com', result:'http://www.bugmenot.com/view/{R}', tips:'Trouver et partager des logins pour les sites qui obligent à s\'enregistrer', title:'BugMeNot'},
	{href:'http://shopping.kelkoo.fr', result:'http://shopping.kelkoo.fr/ctl/do/search?siteSearchQuery={R}', tips:'Comparateur de prix', title:'Kelkoo'},
	{href:'http://www.fr.lastminute.com', result:'', tips:'Offres exclusives séjour, hôtel, week-end', title:'Lastminute'},
	{href:'http://www.openstreetmap.org', result:'', tips:'La carte coopérative libre', title:'OpenStreetMap'},
	{href:'http://www.meteo.fr/temps/france/prevision/cartefrj.html', result:'', tips:'Toujours un temps d\'avance', title:'Météo'},
	{href:'http://fr.mappy.com', result:'http://fr.mappy.com/#d={R}%2C+France&amp;p=map', tips:'Services de plans, calcul d\'itinéraires et guide d\'adresses', title:'Mappy'},
	{href:'http://www.php.net', result:'http://www.php.net/{R}', tips:'Hypertext Preprocessor', title:'Php'},
	{href:'http://www.qype.fr', result:'http://www.qype.fr/search/find?qype_query={R}', tips:'Trouvez des bonnes adresses et des bons plans près de chez vous', title:'Qype'},
	{href:'http://www.service-public.fr', result:'http://larecherche.service-public.fr/df/oxide?criteriaContent={R}&amp;page=resultssprubs&amp;action=launchsearch&amp;DynDomain=SP', tips:'Le portail de l\'administration française', title:'ServicePublic'},
	{href:'http://www.viamichelin.com', result:'', tips:'Itinéraire routier urbain, cartes routières France Europe', title:'ViaMichelin'},
	{href:'http://www.voyages-sncf.com', result:'', tips:'Réservation de billet de train en ligne', title:'VoyagesSncf'},
	{href:'http://www.zoho.com', result:'', tips:'Zoho\'s online office tools with easy collaboration', title:'Zoho'}
	]}
];