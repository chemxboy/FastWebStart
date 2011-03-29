﻿var SITES = [
{title: 'SEARCH', data : [
{href:'http://www.google.fr', result:'http://www.google.fr/search?q={R}', tips:'Recherche Google', title:'<strong>Google</strong>'}, 
{href:'http://www.google.com/codesearch', result:'http://www.google.com/codesearch?q={R}&sbtn=Rechercher', tips:'Recherche Google', title:'GoogleCodeSearch'}, 
{href:'http://code.google.com', result:'http://code.google.com/intl/fr/query/#q={R}', tips:'Google Code Search Engine', title:'<strong>CodeGoogle</strong>'},
{href:'http://www.google.fr/search?num=80&tbo=1&tbs=dsc%3A1%2Cdtf%3Aq&q=', result:'http://www.google.fr/search?num=80&tbo=1&tbs=dsc%3A1%2Cdtf%3Aq&q={R}', tips:'Recherche Questions/Réponses sur Google', title:'GoogleQ&amp;A'}, 
{href:'http://fr.wikipedia.org/wiki/Portail:Internet', result:'http://fr.wikipedia.org/wiki/{R}', tips:'Portail Internet Wikipédia', title:'<strong>Wikipédia</strong>'}, 
{href:'http://stackoverflow.com', result:'http://stackoverflow.com/search?q={R}', tips:'Stack Overflow is a collaboratively edited question and answer site for programmers', title:'<strong>StackOverflow</strong>'}, 
{href:'http://www.alsacreations.com/tutoriels/', tips:'Alsacréations - Tutoriels XHTML, CSS, Accessibilité, JavaScript', title:'AlsaCreations'},
{href:'http://start.fedoraproject.org', tips:'Recherche filtrées par type de licences', title:'FedoraProject'},
{href:'http://doc.ubuntu-fr.org/?do=search&id=love&tsearch=Documentation',result:'http://doc.ubuntu-fr.org/?do=search&id={R}&tsearch=Documentation', tips:'Documentation Ubuntu Francophone', title:'UbuntuDocs'},
{href:'http://www.siteduzero.com', result:'http://www.siteduzero.com/recherche.html?src={R}&c=3', tips:'Site communautaire de tutoriels gratuits pour débutants', title:'SiteDuZero'},
{href:'http://www.archive.org', result:'http://www.archive.org/search.php?query={R}', tips:'Internet Archive: Wayback Machine', title:'WebArchive'}
]}, {title: 'SYSTEMS', data : [
{href:'http://httpd.apache.org/docs/2.2/', tips:'HTTP Apache Version 2.2 Documentation', title:'Apache'}, 
{href:'http://developer.android.com', result:'http://developer.android.com/search.html#q={R}', tips:'Android Developers', title:'Android'}, 
{href:'http://developer.apple.com/iphone/index.action', result:'http://developer.apple.com/iphone/search/search.php?Search={R}', tips:'iPhone Dev Center', title:'iPhone'}, 
{href:'http://www.asp.net', tips:'The Official Microsoft ASP.NET Site', title:'Asp'}, 
{href:'http://www.java.com/fr/download/help/index.xml', result:'http://search.sun.com/javacom/index.jsp?locale=fr&col=javacom_fr&charset=utf-8&qt={R}', tips:'Centre d\'aide Java', title:'Java'}, 
{href:'http://doc.ubuntu-fr.org', result:'http://doc.ubuntu-fr.org/?do=search&id={R}', tips:'Documentation Ubuntu Francophone', title:'Ubuntu'}, 
{href:'http://www.ovh.com', tips:'Hébergement mutualisé serveurs dédiés', title:'Ovh'},
{href:'http://www.online.net', tips:'Hébergement mutualisé serveurs dédiés', title:'Online'},
{href:'http://www.amen.fr', tips:'Hébergeur, nom de domaine, serveur dédié ou privé', title:'Amen'},
{href:'http://www.gandi.net', tips:'Nom de domaine et hébergement cloud', title:'Gandi'},
{href:'http://php.opensourcecms.com/scripts/show.php?catid=1&cat=CMS%20/%20Portals', tips:'Try before you install', title:'OpenSourceCMS'}, 
{href:'http://demolabo.com', tips:'Try open source demos and compare them before install', title:'DemoLabo'}
]}, {title: 'EDITING', data : [
{href:'http://ideone.com', tips:'Compile and run code online in more than 40 programming languages', title:'IdeOne'}, 
{href:'http://www.coderun.com', tips:'Online Web development IDE', title:'<strong>CodeRun</strong>'},
{href:'http://jsfiddle.net', tips:'Online Editor for the Web (JavaScript, HTML, CSS)', title:'<strong>JsFiddle</strong>'},
{href:'http://c9.io/dashboard.html', tips:'Your code, anywhere, anytime (JS/HTML/PHP...)', title:'Cloud9'},
{href:'http://www.akshell.com/ide/', tips:'Server-side JavaScript development and hosting', title:'Akshell'},
{href:'https://bespin.mozillalabs.com', tips:'Code in the cloud, by Mozilla', title:'Bespin'},
{href:'http://tinymce.moxiecode.com/tryit/full.php', tips:'Online HTML WYSIWYG editor', title:'<strong>TinyMce</strong>'},
{href:'http://www.balsamiq.com/demos/mockups/Mockups.html', tips:'WebApp mockups, before writing code', title:'Balsamiq'}, 
{href:'http://www.mindomo.com', tips:'Mind Mapping', title:'Mindomo'}, 
{href:'http://aviary.com', tips:'A suite of powerful creative applications (Image Editor, Effects Editor, ...)', title:'Aviary'}, 
{href:'http://www.pixlr.com/app', tips:'Online Photo editor', title:'<strong>PixlR</strong>'}, 
{href:'http://www.degraeve.com/favicon', tips:'Favicon Editor', title:'FavIcon'}
]}, {title: 'DESIGN', data : [
{href:'http://colorschemedesigner.com', tips:'Color Scheme Designer 3', title:'<strong>ColorScheme</strong>'}, 
{href:'http://kuler.adobe.com', result:'http://kuler.adobe.com/#themes/search?term={R}', tips:'Color Scheme Designer 3', title:'Kuler'}, 
{href:'http://www.iconlook.com', result:'http://www.iconlook.com/search.icon?q={R}', tips:'The icon search', title:'IconLook'}, 
{href:'http://www.freeiconsdownload.com/Index.html', tips:'Free Icons Download', title:'FreeIcons'}, 
{href:'http://www.iconfinder.net', result:'http://www.iconfinder.net/search/?q={R}', tips:'Search through 128,345 icons', title:'IconFinder'}, 
{href:'http://www.myfontbook.com/app', tips:'Online (your) PC Font Viewer', title:'MyFontbook'}, 
{href:'http://www.dafont.com', result:'http://www.dafont.com/fr/search.php?psize=m&q={R}', tips:'Polices a tester et télécharger', title:'DaFont'},
{href:'http://facebook-symbols.com/all/', tips:'All symbols -for Facebook- (character list)', title:'Symbols'},
{href:'http://www.typetester.org', tips:'Compare fonts for the screen', title:'Typetester'},
{href:'http://www.typefolly.com', tips:'CSS3 Web typography tool', title:'TypeFolly'},
{href:'http://code.google.com/webfonts/preview', tips:'Font Preview - Google Font Directory', title:'GoogleWebFonts'}
]}, {title: 'RESSOURCES', data : [
{href:'http://code.google.com/p/molokoloco-coding-project/wiki/WikiMenu?tm=6', result:'http://code.google.com/p/molokoloco-coding-project/w/list?can=1&q={R}', tips:'Molokoloco\'s Personal Coding ToolTips', title:'<strong>WikiMolokoloco</strong>'},
{href:'http://code.google.com/intl/fr/more/', result:'http://code.google.com/intl/fr/query/#q={R}', tips:'Google API Directory', title:'GoogleAPI'},
{href:'http://www.programmableweb.com/mashups/directory', result:'http://www.programmableweb.com/search/{R}', tips:'Web 2.0 Mashups Directory', title:'ProgrammableWeb'}, 
{href:'http://sourceforge.net', result:'http://sourceforge.net/search/?words={R}', tips:'Find and Develop Open Source Software', title:'SourceForge'}, 
{href:'http://github.com/repositories', result:'http://github.com/search?q={R}', tips:'Source Code Repositories', title:'<strong>GitHub</strong>'}, 
{href:'http://www.addedbytes.com/cheat-sheets', tips:'Cheat Sheets, quick references for a variety of languages and web technologies', title:'CheatSheets'},
{href:'http://developer.yahoo.com/everything.html#tools', result:'http://search.yahoo.com/search?va={R}&vs=developer.yahoo.com&vs=developer.yahoo.net', tips:'Yahoo! Developer Network - Developers Resources', title:'YahooDeveloper'}, 
{href:'https://addons.mozilla.org', result:'https://addons.mozilla.org/fr/firefox/search?q={R}', tips:'Modules pour Firefox', title:'FirefoxAddons'}, 
{href:'http://www.nirsoft.net/utils/index.html#programmer_tools', tips:'Freeware Utilities for Windows', title:'ProgrammerTools'}, 
{href:'http://patterntap.com', tips:'Organized Web Design Collection of User Interfaces', title:'PatternTap'},
{href:'http://pipes.yahoo.com/pipes/person.info', result:'http://pipes.yahoo.com/pipes/search?q={R}', tips:'Editing RSS in LIVE', title:'YahooPipes'}, 
{href:'http://www.xfruits.com', tips:'Compose your information system', title:'xFruits'}, 
]}, {title: 'HTML/CSS', data : [
{href:'http://www.w3.org/MarkUp/#recommendations', tips:'W3C HTML : (Extensible) HyperText Markup Language Reference (Current Work)', title:'W3cHtml'}, 
{href:'http://www.w3.org/Style/CSS/current-work', tips:'W3C CSS : Cascading Style Sheets Reference (Current Work)', title:'W3cCss'}, 
{href:'http://validator.w3.org', tips:'The W3C Markup Validation Service', title:'<strong>W3cValidator</strong>'}, 
{href:'http://www.fontsquirrel.com/fontface/generator', tips:'Create Your Own @font-face Kits', title:'FontSquirrel'},
{href:'http://www.degraeve.com/reference/specialcharacters.php', tips:'Special Characters in HTML', title:'SpecialChar'},
{href:'http://toolserver.org/~diberri/cgi-bin/html2wiki/index.cgi', tips:'Conversion code HTML en WIKI', title:'Html2Wiki'},
{href:'http://www.immigration-usa.com/html_colors.html', tips:'HTML Color Chart', title:'HtmlColors'},
{href:'http://www.html5rocks.com', tips:'Web Development to the next level', title:'Html5Rocks'},
{href:'http://www.codebeautifier.com', tips:'CSS Beautifier/Compressor', title:'CssBeautifier'}, 
{href:'http://www.css3maker.com', tips:'Cross-Browser CSS3 Rule Generator', title:'CSS3maker'},
{href:'http://www.colorzilla.com/gradient-editor', tips:'Ultimate CSS Gradient Generator', title:'CSS3Gradient'},
]}, {title: 'JAVASCRIPT', data : [
{href:'http://docs.jquery.com', result:'http://docs.jquery.com/Special:Search?ns0=1&search={R}', tips:'jQuery JavaScript Library Documentation', title:'<strong>jQueryDoc</strong>'},
{href:'https://developer.mozilla.org/en/JavaScript', result:'https://developer.mozilla.org/Special:Search?search={R}', tips:'Mozilla JavaScript Reference', title:'MozillaJS'}, 
{href:'http://msdn.microsoft.com/en-us/library/4yyeyb0a%28VS.85%29.aspx', result:'http://social.msdn.microsoft.com/Search/en-US/?Refinement=117&Query={R}&ir=1', tips:'Windows JScript Reference', title:'WindowsJS'}, 
{href:'http://prototypejs.org', result:'http://prototypejs.org/api/{R}', tips:'Prototype JavaScript framework API Documentation', title:'PrototypeDoc'},
{href:'http://processingjs.org', tips:'Open programming language for people who want to program images, animation, and interactions for the web', title:'ProcessingJS'},
{href:'http://raphaeljs.com', tips:'Small JavaScript library that should simplify your work with vector graphics on the web', title:'RaphaelJS'},
{href:'http://www.sencha.com/deploy/dev/docs/', tips:'Sencha (Ext JS) — JavaScript Framework and RIA Platform', title:'SanchaDoc'},
{href:'http://www.sencha.com/deploy/touch/docs/', tips:'Sencha (Ext JS) — JavaScript Mobile Framework and RIA Platform', title:'SanchaTouchDoc'},
{href:'http://phonegap.pbworks.com/', result:'http://phonegap.pbworks.com/FindPage?SearchFor={R}', tips:'Open source development framework for building cross-platform mobile apps', title:'PhoneGap'},
{href:'http://phpjs.org/functions/index', tips:'High-level PHP functions to low-level JavaScript platforms such as web browsers', title:'PhpJS'},
{href:'http://code.google.com/intl/fr/apis/ajax/', result:'http://code.google.com/intl/fr/query/#p=ajax&q={R}', tips:'Google AJAX APIs - Google Code', title:'GoogleJsApi'},
{href:'http://jsperf.com', tips:'JavaScript performance playground', title:'JSperf'},
{href:'http://www.minifyjavascript.com', tips:'JavaScript Compressor', title:'MinifyJS'}, 
{href:'http://closure-compiler.appspot.com/home', tips:'JavaScript Closure Compiler Service by Google', title:'<strong>ClosureCompiler</strong>'}, 
{href:'http://jsbeautifier.org', tips:'Javascript unpacker and beautifier', title:'JsBeautifier'}, 
{href:'http://jsonformat.com', tips:'JSON unpacker and beautifier', title:'JsonBeautifier'}
]}, {title: 'PHP/MYSQL', data : [
{href:'http://fr.php.net', result:'http://fr.php.net/manual-lookup.php?pattern={R}', tips:'PHP: Manual Quick Reference', title:'<strong>PhpNet</strong>'},
{href:'http://www.phpclasses.org/browse/', result:'http://www.phpclasses.org/search.html?words={R}&go_search=1', tips:'Browse the available classes - PHP Classes', title:'PhpClasses'}, 
{href:'http://framework.zend.com/manual/en/', result:'http://framework.zend.com/manual/search?query={R}&language=en&version=1.11', tips:'Zend Framework Manual [en]', title:'Zend'}, 
{href:'http://phpanywhere.net', tips:'Online php code editor (IDE)', title:'PhpAnywhere'},
{href:'http://beta.phpformatter.com', tips:'Online php code beautifier', title:'PhpBeautifier'}, 
{href:'http://dev.mysql.com/doc/refman/5.0/fr/ix01.html', result:'http://search.mysql.com/search?q={R}&lr=lang_fr', tips:'MySQL 5.0 Reference Manual', title:'MySqlDoc'}, 
{href:'http://www.sqlite.org', result:'http://www.sqlite.org/search?q={R}', tips:'SQLite Home Page', title:'SQLite'},
{href:'http://ondras.zarovi.cz/sql/demo', tips:'Online SQL Designer', title:'SqlDesigner'}, 
{href:'http://cooletips.de/htaccess', tips:'.HTACCESS Generator', title:'HtAccess'}, 
{href:'http://www.zonecheck.fr/demo', tips:'ZoneCheck effectue plusieurs tests sur la zone (domaine)', title:'ZoneCheck'}, 
{href:'http://www.whois.net', tips:'Domain Names Lookup ', title:'Whois'},
{href:'http://localhost', tips:'That\'s your home !', title:'<strong>LocalHost</strong>'}
]}, {title: 'FLASH/FLEX', data : [
{href:'http://wonderfl.net', tips:'Wonderfl build Flash online', title:'<strong>WonderFl</strong>'}, 
{href:'http://www.adobe.com/devnet/flash/', result:'http://community.adobe.com/help/search.html?hl=en_US&lr=en_US&self=1&area=0&l=flash_product_adobelr&q={R}', tips:'Adobe Flash Developer Center', title:'<strong>FlashDevCenter</strong>'}, 
{href:'http://help.adobe.com/en_US/AS3LCR/Flash_10.0', result:'http://community.adobe.com/help/search.html?hl=en_US&q={R}&l=flash_product_adobelr&area=&self=1&meta=site%3Dcommunityhelp-as3', tips:'ActionScript 3.0 Reference for the Adobe Flash Platform', title:'FlashAs3Ref'}, 
{href:'http://livedocs.adobe.com/flex/3/html/index.html', result:'http://community.adobe.com/help/search.html?hl=en_US&q={R}&l=flex_product_adobelr&area=&self=1&meta=site%3Dcommunityhelp-flex_3', tips:'Adobe Flex 3 Help', title:'FlexRef'}, 
{href:'http://examples.adobe.com/flex3/componentexplorer/explorer.html', tips:'Adobe Flex 3 Component Explorer', title:'FlexComponents'}, 
{href:'http://examples.adobe.com/flex2/consulting/styleexplorer/Flex2StyleExplorer.html', tips:'Flex2 Style Explorer', title:'FlexStyles'}, 
{href:'http://flash.mediabox.fr', tips:'Centre de Formation Flash', title:'<strong>MediaBox</strong>'}, 
{href:'http://codemoiunmouton.wordpress.com', result:'http://codemoiunmouton.wordpress.com/?s={R}', tips:'Le blog des développeurs de RIA', title:'CodeMoiUnMouton'},
{href:'http://www.yazo.net', result:'http://www.yazo.net/index.php/recherche?searchword={R}', tips:'Ressources et tutos Flash AS3', title:'Yazo'}
]}, {title: 'TOOLS', data : [
{href:'http://erwy.developpez.com/tutoriels/xml/xpath-fonctionnements-predicats/', tips:'xPath documentation', title:'xPathDoc'},
{href:'http://gskinner.com/RegExr/', tips:'Online Regular Expression Testing Tool', title:'RegExr'}, 
{href:'http://www.dropbox.com', tips:'Online backup, file sync and sharing made easy', title:'<strong>DropBox</strong>'}, 
{href:'http://net2ftp.com', tips:'A web based FTP client', title:'Net2Ftp'}, 
{href:'http://goo.gl/', tips:'Google URL Shortener', title:'Goo.gl'},
{href:'http://qrcode.kaywa.com/', result:'http://qrcode.kaywa.com/img.php?s=5&d={R}', tips:'Générateur de QR Code', title:'QRcode'}, 
{href:'http://www.greywyvern.com/code/php/binary2base64', tips:'Binary File (Image) to Base64 (HTML) Encoder', title:'Binary2Base64'}, 
{href:'http://www.iptools.com', result:'http://www.iptools.com/dnstools.php?tool=whois&user_data={R}', tips:'Ip Tools, DNS tools, internet tools, WHOIS, traceroute, ping, domain name tools', title:'<strong>IpTools</strong>'}, 
{href:'http://speedtest.net', tips:'The Global Broadband Speed Test', title:'SpeedTest'}, 
{href:'http://browsershots.org', tips:'Check Browser Compatibility, Cross Platform Browser Test', title:'BrowserShots'},
{href:'http://www.screentoaster.com', result:'http://www.screentoaster.com/search?query_search={R}', tips:'Free Online Screen Recorder (ScreenCast)', title:'<strong>ScreenToaster</strong>'},
{href:'http://www.google.com/analytics', tips:'Google Analytics | Outil d\'analyse d\'audience Internet', title:'Analytics'}, 
{href:'http://feedburner.google.com/', tips:'Web feed management provider', title:'FeedBurner'}, 
{href:'http://tmobile.modeaondemand.com/htc/g1/', tips:'Google G1 Emulator', title:'AndroidEmulator'}, 
{href:'http://iphonetester.com', tips:'iPhone 3G Emulator', title:'iPhoneEmulator'}, 
{href:'http://www.opera.com/mini/demo', tips:'Emulateur Opera Mini sur mobile', title:'OperaMiniEmulator'}]}
];