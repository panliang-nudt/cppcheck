<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr_FR">
<context>
    <name>About</name>
    <message>
        <location filename="about.ui" line="14"/>
        <source>About Cppcheck</source>
        <translation>A propos</translation>
    </message>
    <message>
        <location filename="about.ui" line="64"/>
        <source>Version %1</source>
        <translation>Version %1</translation>
    </message>
    <message>
        <location filename="about.ui" line="71"/>
        <source>Cppcheck - A tool for static C/C++ code analysis.</source>
        <translation>Cppcheck - Un outil d&apos;analyse statique de code C/C++.</translation>
    </message>
    <message>
        <location filename="about.ui" line="91"/>
        <source>This program is licensed under the terms
of the GNU General Public License version 3</source>
        <translation>Ce programme est sous licence GNU
General Public License version 3</translation>
    </message>
    <message>
        <location filename="about.ui" line="102"/>
        <source>Visit Cppcheck homepage at %1</source>
        <translation>Visitez le site Cppcheck : %1</translation>
    </message>
    <message>
        <location filename="about.ui" line="115"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Many thanks to these libraries that we use:&lt;/p&gt;&lt;ul style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;pcre&lt;/li&gt;&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;picojson&lt;/li&gt;&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;qt&lt;/li&gt;&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;tinyxml2&lt;/li&gt;&lt;/ul&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="about.ui" line="81"/>
        <source>Copyright © 2007-%1 Cppcheck team.</source>
        <oldsource>Copyright © 2007-2021 Cppcheck team.</oldsource>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ApplicationDialog</name>
    <message>
        <location filename="applicationdialog.ui" line="23"/>
        <source>Add an application</source>
        <translation>Ajouter une application</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="138"/>
        <source>Browse</source>
        <translation>Parcourir</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="63"/>
        <source>Executable files (*.exe);;All files(*.*)</source>
        <translation>Fichier exécutable (*.exe);;Tous les fichiers(*.*)</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="66"/>
        <source>Select viewer application</source>
        <translation>Sélection de l&apos;application</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="81"/>
        <source>Cppcheck</source>
        <translation></translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="86"/>
        <source>&amp;Executable:</source>
        <translation>&amp;Exécutable : </translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="96"/>
        <source>&amp;Parameters:</source>
        <translation>&amp;Paramètres : </translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="41"/>
        <source>Here you can add an application that can open error files. Specify a name for the application, the application executable and command line parameters for the application.

The following texts in parameters are replaced with appropriate values when application is executed:
(file) - Filename containing the error
(line) - Line number containing the error
(message) - Error message
(severity) - Error severity

Example opening a file with Kate and make Kate scroll to the correct line:
Executable: kate
Parameters: -l(line) (file)</source>
        <translation>Vous pouvez ajouter une application capable d&apos;ouvrir les fichiers d&apos;erreurs. Spécifiez le nom de l&apos;application, la commande à exécuter, ainsi que les paramètres de la commande

Les textes en paramètres sont remplacés par les valeurs appropriées lorsque l&apos;application est exécutée :
(fichier) - Fichier contenant l&apos;erreur
(ligne) - Numéro de ligne contenant l&apos;erreur
(message) - Message d&apos;erreur
(sévérité) - Sévérité de l&apos;erreur

Exemple pour ouvrir un fichier avec Kate et se déplacer vers une ligne spécifique :
Exécutable : kate
Paramètres : -l(ligne) (fichier)</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="76"/>
        <source>&amp;Name:</source>
        <translation>&amp;Nom : </translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="82"/>
        <source>You must specify a name, a path and optionally parameters for the application!</source>
        <translation>Vous devez spécifier un nom, un chemin, et eventuellement des paramètres en option à l&apos;application !</translation>
    </message>
</context>
<context>
    <name>FileViewDialog</name>
    <message>
        <location filename="fileviewdialog.cpp" line="51"/>
        <source>Could not find the file: %1</source>
        <translation>Ne trouve pas le fichier : %1</translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="55"/>
        <location filename="fileviewdialog.cpp" line="69"/>
        <source>Cppcheck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="65"/>
        <source>Could not read the file: %1</source>
        <translation>Ne peut pas lire le fichier : %1</translation>
    </message>
</context>
<context>
    <name>HelpDialog</name>
    <message>
        <location filename="helpdialog.ui" line="14"/>
        <source>Cppcheck GUI help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="34"/>
        <source>Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="44"/>
        <source>Index</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="helpdialog.cpp" line="79"/>
        <source>Helpfile &apos;%1&apos; was not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="helpdialog.cpp" line="81"/>
        <source>Cppcheck</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LibraryAddFunctionDialog</name>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="23"/>
        <source>Add function</source>
        <translation>Ajouter une fonction</translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="34"/>
        <source>Function name(s)</source>
        <translation>Nom(s) de la fonction</translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="44"/>
        <source>Number of arguments</source>
        <translation>Nombre d&apos;arguments</translation>
    </message>
</context>
<context>
    <name>LibraryDialog</name>
    <message>
        <location filename="librarydialog.ui" line="14"/>
        <source>Library Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="22"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="29"/>
        <source>Save</source>
        <translation type="unfinished">Sauvegarder</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="62"/>
        <source>Functions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="111"/>
        <source>Add</source>
        <translation type="unfinished">Ajouter</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="204"/>
        <source>noreturn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="212"/>
        <source>False</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="217"/>
        <source>True</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="222"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="232"/>
        <source>return value must be used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="239"/>
        <source>ignore function in leaks checking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="246"/>
        <source>Arguments</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="258"/>
        <source>Edit</source>
        <translation type="unfinished">Editer</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="87"/>
        <location filename="librarydialog.cpp" line="159"/>
        <source>Library files (*.cfg)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="89"/>
        <source>Open library file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="71"/>
        <source>Sort</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="131"/>
        <source>Filter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="164"/>
        <source>Comments</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="36"/>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="100"/>
        <location filename="librarydialog.cpp" line="112"/>
        <location filename="librarydialog.cpp" line="149"/>
        <source>Cppcheck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="162"/>
        <source>Save the library as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="113"/>
        <source>Failed to load %1. %2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="101"/>
        <source>Cannot open file %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="150"/>
        <source>Cannot save file %1.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LibraryEditArgDialog</name>
    <message>
        <location filename="libraryeditargdialog.ui" line="14"/>
        <source>Edit argument</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="20"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is bool value allowed? For instance result from comparison or from &apos;!&apos; operator.&lt;/p&gt;
&lt;p&gt;Typically, set this if the argument is a pointer, size, etc.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    memcmp(x, y, i == 123);   // last argument should not have a bool value&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="28"/>
        <source>Not bool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="35"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is a null parameter value allowed?&lt;/p&gt;
&lt;p&gt;Typically this should be used on any pointer parameter that does not allow null.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    strcpy(x,y); // neither x or y is allowed to be null.&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="43"/>
        <source>Not null</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="50"/>
        <source>Not uninit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="57"/>
        <source>String</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="70"/>
        <source>Format string</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="92"/>
        <source>Min size of buffer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="101"/>
        <location filename="libraryeditargdialog.ui" line="203"/>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="109"/>
        <location filename="libraryeditargdialog.ui" line="214"/>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="114"/>
        <location filename="libraryeditargdialog.ui" line="219"/>
        <source>argvalue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="119"/>
        <location filename="libraryeditargdialog.ui" line="224"/>
        <source>mul</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="124"/>
        <location filename="libraryeditargdialog.ui" line="229"/>
        <source>strlen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="132"/>
        <location filename="libraryeditargdialog.ui" line="237"/>
        <source>Arg</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="159"/>
        <location filename="libraryeditargdialog.ui" line="264"/>
        <source>Arg2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="194"/>
        <source>and</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="310"/>
        <source>Valid values</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="mainwindow.ui" line="26"/>
        <location filename="mainwindow.ui" line="667"/>
        <location filename="mainwindow.cpp" line="384"/>
        <location filename="mainwindow.cpp" line="541"/>
        <location filename="mainwindow.cpp" line="616"/>
        <location filename="mainwindow.cpp" line="721"/>
        <location filename="mainwindow.cpp" line="743"/>
        <location filename="mainwindow.cpp" line="1230"/>
        <location filename="mainwindow.cpp" line="1355"/>
        <location filename="mainwindow.cpp" line="1639"/>
        <location filename="mainwindow.cpp" line="1647"/>
        <location filename="mainwindow.cpp" line="1670"/>
        <location filename="mainwindow.cpp" line="1741"/>
        <location filename="mainwindow.cpp" line="1815"/>
        <source>Cppcheck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="84"/>
        <source>Checking for updates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="100"/>
        <source>Hide</source>
        <translation type="unfinished">Cacher</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="132"/>
        <source>&amp;File</source>
        <translation>&amp;Fichier</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="151"/>
        <source>&amp;View</source>
        <translation>&amp;Affichage</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="183"/>
        <source>&amp;Help</source>
        <translation>&amp;Aide</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="233"/>
        <source>&amp;Edit</source>
        <translation>&amp;Édition</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="246"/>
        <source>Standard</source>
        <translation>Standard</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="294"/>
        <source>&amp;License...</source>
        <translation>&amp;Licence...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="299"/>
        <source>A&amp;uthors...</source>
        <translation>A&amp;uteurs...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="308"/>
        <source>&amp;About...</source>
        <translation>À &amp;Propos...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="313"/>
        <source>&amp;Files...</source>
        <translation>&amp;Fichiers...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="322"/>
        <source>Ctrl+F</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="331"/>
        <source>&amp;Directory...</source>
        <translation>&amp;Répertoires...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="340"/>
        <source>Ctrl+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="352"/>
        <source>Ctrl+R</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="370"/>
        <source>&amp;Stop</source>
        <translation>&amp;Arrêter</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="379"/>
        <source>Esc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="388"/>
        <source>&amp;Save results to file...</source>
        <translation>&amp;Sauvegarder les résultats dans un fichier...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="391"/>
        <source>Ctrl+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="396"/>
        <source>&amp;Quit</source>
        <translation>&amp;Quitter</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="408"/>
        <source>&amp;Clear results</source>
        <translation>&amp;Effacer les résultats</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="417"/>
        <source>&amp;Preferences</source>
        <translation>&amp;Préférences</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="458"/>
        <source>&amp;Check all</source>
        <translation>&amp;Tout cocher</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="463"/>
        <source>&amp;Uncheck all</source>
        <translation>&amp;Tout décocher</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="468"/>
        <source>Collapse &amp;all</source>
        <translation>&amp;Tout réduire</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="473"/>
        <source>&amp;Expand all</source>
        <translation>&amp;Tout dérouler</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="489"/>
        <source>&amp;Contents</source>
        <translation>&amp;Contenus</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="492"/>
        <source>Open the help contents</source>
        <translation>Ouvir l&apos;aide</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="495"/>
        <source>F1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1407"/>
        <source>License</source>
        <translation>Licence</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1414"/>
        <source>Authors</source>
        <translation>Auteurs</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1429"/>
        <source>Save the report file</source>
        <translation>Sauvegarder le rapport</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1246"/>
        <location filename="mainwindow.cpp" line="1436"/>
        <source>XML files (*.xml)</source>
        <translation>Fichiers XML (*.xml)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1393"/>
        <source>About</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1440"/>
        <source>Text files (*.txt)</source>
        <translation>Fichiers Texte (*.txt)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1444"/>
        <source>CSV files (*.csv)</source>
        <translation>Fichiers CSV (*.csv)</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="155"/>
        <source>&amp;Toolbars</source>
        <translation>&amp;Boite à outils</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="264"/>
        <source>Categories</source>
        <translation>Catégories</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="432"/>
        <location filename="mainwindow.ui" line="435"/>
        <source>Show style warnings</source>
        <translation>Afficher les avertissements de style</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="450"/>
        <location filename="mainwindow.ui" line="453"/>
        <source>Show errors</source>
        <translation>Afficher les erreurs</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="481"/>
        <source>&amp;Standard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="484"/>
        <source>Standard items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="500"/>
        <source>Toolbar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="508"/>
        <source>&amp;Categories</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="511"/>
        <source>Error categories</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="516"/>
        <source>&amp;Open XML...</source>
        <translation>&amp;Ouvrir un fichier XML...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="525"/>
        <source>Open P&amp;roject File...</source>
        <translation>Ouvrir un P&amp;rojet...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="542"/>
        <source>&amp;New Project File...</source>
        <translation>&amp;Nouveau Projet...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="550"/>
        <source>&amp;Log View</source>
        <translation>&amp;Journal</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="553"/>
        <source>Log View</source>
        <translation>Journal</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="561"/>
        <source>C&amp;lose Project File</source>
        <translation>F&amp;ermer le projet</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="569"/>
        <source>&amp;Edit Project File...</source>
        <translation>&amp;Editer le projet</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="581"/>
        <source>&amp;Statistics</source>
        <translation>Statistiques</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="596"/>
        <location filename="mainwindow.ui" line="599"/>
        <source>Show warnings</source>
        <translation>Afficher les avertissements</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="614"/>
        <location filename="mainwindow.ui" line="617"/>
        <source>Show performance warnings</source>
        <translation>Afficher les avertissements de performance</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="625"/>
        <source>Show &amp;hidden</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="831"/>
        <location filename="mainwindow.cpp" line="869"/>
        <source>Information</source>
        <translation>Information</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="640"/>
        <source>Show information messages</source>
        <translation>Afficher les messages d&apos;information</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="655"/>
        <source>Show portability warnings</source>
        <translation>Afficher les problèmes de portabilité</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="617"/>
        <source>You must close the project file before selecting new files or directories!</source>
        <translation>Vous devez d&apos;abord fermer le projet avant de choisir des fichiers/répertoires</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1248"/>
        <source>Open the report file</source>
        <translation>Ouvrir le rapport</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1549"/>
        <source>Project files (*.cppcheck);;All files(*.*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1551"/>
        <source>Select Project File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1648"/>
        <source>To check the project using addons, you need a build directory.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1697"/>
        <source>Select Project Filename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1742"/>
        <source>No project file loaded</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1970"/>
        <source>Install</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1974"/>
        <source>New version available: %1. %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="379"/>
        <source>There was a problem with loading the editor application settings.

This is probably because the settings were changed between the Cppcheck versions. Please check (and fix) the editor application settings, otherwise the editor program might not start correctly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="693"/>
        <source>&amp;Filter</source>
        <translation>&amp;Filtre</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="696"/>
        <source>Filter results</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="119"/>
        <location filename="mainwindow.cpp" line="1511"/>
        <source>Quick Filter:</source>
        <translation>Filtre rapide : </translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="722"/>
        <source>Found project file: %1

Do you want to load this project file instead?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="190"/>
        <location filename="mainwindow.cpp" line="1513"/>
        <location filename="mainwindow.cpp" line="1579"/>
        <location filename="mainwindow.cpp" line="1710"/>
        <source>Project:</source>
        <translation>Projet : </translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1810"/>
        <source>The project file

%1

 could not be found!

Do you want to remove the file from the recently used projects -list?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="283"/>
        <source>Filter</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="712"/>
        <source>Windows 32-bit ANSI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="720"/>
        <source>Windows 32-bit Unicode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="728"/>
        <source>Unix 32-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="736"/>
        <source>Unix 64-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="744"/>
        <source>Windows 64-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.cpp" line="117"/>
        <source>Cppcheck GUI - Command line parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="197"/>
        <source>C++ standard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="885"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="840"/>
        <source>File not found</source>
        <translation>Fichier introuvable</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="843"/>
        <source>Bad XML</source>
        <translation>Mauvais fichier XML</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="846"/>
        <source>Missing attribute</source>
        <translation>Attribut manquant</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="849"/>
        <source>Bad attribute value</source>
        <translation>Mauvaise valeur d&apos;attribut</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="869"/>
        <source>Failed to load the selected library &apos;%1&apos;.
%2</source>
        <translation>Echec lors du chargement de la bibliothèque &apos;%1&apos;.
%2</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="852"/>
        <source>Unsupported format</source>
        <translation>Format non supporté</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="831"/>
        <source>The library &apos;%1&apos; contains unknown elements:
%2</source>
        <translation>La bibliothèque &apos;%1&apos; contient des éléments inconnus:
%2</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="855"/>
        <source>Duplicate platform type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="858"/>
        <source>Platform type redefined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="814"/>
        <source>&amp;Print...</source>
        <translation> &amp;Imprimer...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="817"/>
        <source>Print the Current Report</source>
        <translation>Imprimer le rapport</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="822"/>
        <source>Print Pre&amp;view...</source>
        <translation>Apercu d&apos;impression...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="825"/>
        <source>Open a Print Preview Dialog for the Current Results</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="833"/>
        <source>Open library editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="861"/>
        <source>Unknown element</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="864"/>
        <source>Unknown issue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="692"/>
        <source>Select configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.cpp" line="102"/>
        <source>Cppcheck GUI.

Syntax:
    cppcheck-gui [OPTIONS] [files or paths]

Options:
    -h, --help              Print this help
    -p &lt;file&gt;               Open given project file and start checking it
    -l &lt;file&gt;               Open given results xml file
    -d &lt;directory&gt;          Specify the directory that was checked to generate the results xml specified with -l
    -v, --version           Show program version
    --data-dir=&lt;directory&gt;  This option is for installation scripts so they can configure the directory where
                            datafiles are located (translations, cfg). The GUI is not started when this option
                            is used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="885"/>
        <source>Failed to load %1. Your Cppcheck installation is broken. You can use --data-dir=&lt;directory&gt; at the command line to specify where this file is located. Please note that --data-dir is supposed to be used by installation scripts and therefore the GUI does not start when it is used, all that happens is that the setting is configured.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1640"/>
        <source>Build dir &apos;%1&apos; does not exist, create it?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="316"/>
        <location filename="mainwindow.ui" line="319"/>
        <source>Analyze files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="334"/>
        <location filename="mainwindow.ui" line="337"/>
        <source>Analyze directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="349"/>
        <source>&amp;Reanalyze modified files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="373"/>
        <location filename="mainwindow.ui" line="376"/>
        <source>Stop analysis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1427"/>
        <source>XML files (*.xml);;Text files (*.txt);;CSV files (*.csv)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="542"/>
        <source>No suitable files found to analyze!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="637"/>
        <source>Select files to analyze</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="652"/>
        <source>Select directory to analyze</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="692"/>
        <source>Select the configuration that will be analyzed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="744"/>
        <source>Found project files from the directory.

Do you want to proceed analysis without using any of these project files?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1351"/>
        <source>Analyzer is running.

Do you want to stop the analysis and exit Cppcheck?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="193"/>
        <source>A&amp;nalyze</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="208"/>
        <source>&amp;C standard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="361"/>
        <source>Reanal&amp;yze all files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="399"/>
        <source>Ctrl+Q</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="429"/>
        <source>Style war&amp;nings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="447"/>
        <source>E&amp;rrors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="528"/>
        <source>Ctrl+Shift+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="537"/>
        <source>Sh&amp;ow Scratchpad...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="545"/>
        <source>Ctrl+Shift+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="593"/>
        <source>&amp;Warnings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="611"/>
        <source>Per&amp;formance warnings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="637"/>
        <source>&amp;Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="652"/>
        <source>&amp;Portability</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="670"/>
        <source>Show Cppcheck results</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="682"/>
        <source>Clang</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="685"/>
        <source>Show Clang results</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="752"/>
        <source>P&amp;latforms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="766"/>
        <source>C++&amp;11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="777"/>
        <source>C&amp;99</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="785"/>
        <source>&amp;Posix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="793"/>
        <source>C&amp;11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="801"/>
        <source>&amp;C89</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="809"/>
        <source>&amp;C++03</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="830"/>
        <source>&amp;Library Editor...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="841"/>
        <source>&amp;Auto-detect language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="849"/>
        <source>&amp;Enforce C++</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="857"/>
        <source>E&amp;nforce C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="868"/>
        <source>C++14</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1671"/>
        <source>Failed to import &apos;%1&apos;, analysis is stopped</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1695"/>
        <source>Project files (*.cppcheck)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="876"/>
        <source>Reanalyze and check library</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="884"/>
        <source>Check configuration (defines, includes)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="892"/>
        <source>C++17</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="903"/>
        <source>C++20</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="631"/>
        <source>C/C++ Source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="632"/>
        <source>Compile database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="633"/>
        <source>Visual Studio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="634"/>
        <source>Borland C++ Builder 6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1231"/>
        <source>Current results will be cleared.

Opening a new XML file will clear current results.
Do you want to proceed?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NewSuppressionDialog</name>
    <message>
        <location filename="newsuppressiondialog.ui" line="17"/>
        <source>New suppression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="25"/>
        <source>Error ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="32"/>
        <source>File name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="42"/>
        <source>Line number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="52"/>
        <source>Symbol name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.cpp" line="78"/>
        <source>Edit suppression</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Platforms</name>
    <message>
        <location filename="platforms.cpp" line="39"/>
        <source>Unix 32-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="40"/>
        <source>Unix 64-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="41"/>
        <source>Windows 32-bit ANSI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="42"/>
        <source>Windows 32-bit Unicode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="43"/>
        <source>Windows 64-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="38"/>
        <source>Native</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ProjectFile</name>
    <message>
        <location filename="projectfile.ui" line="14"/>
        <source>Project File</source>
        <translation>Fichier Projet</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="147"/>
        <source>Paths:</source>
        <translation>Chemins : </translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="221"/>
        <source>Defines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="181"/>
        <location filename="projectfile.ui" line="296"/>
        <source>Add...</source>
        <translation>Ajouter...</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="188"/>
        <location filename="projectfile.ui" line="303"/>
        <location filename="projectfile.ui" line="654"/>
        <source>Edit</source>
        <translation>Editer</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="195"/>
        <location filename="projectfile.ui" line="310"/>
        <location filename="projectfile.ui" line="661"/>
        <location filename="projectfile.ui" line="704"/>
        <source>Remove</source>
        <translation>Supprimer</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="330"/>
        <source>Up</source>
        <translation>Monter</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="337"/>
        <source>Down</source>
        <translation>Descendre</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="686"/>
        <source>Suppressions</source>
        <translation>Suppressions</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="697"/>
        <source>Add</source>
        <translation>Ajouter</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="389"/>
        <source>Note: Put your own custom .cfg files in the same folder as the project file. You should see them above.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="811"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="265"/>
        <source>Include Paths:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="24"/>
        <source>Paths and Defines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="73"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;You have a choice:&lt;/p&gt;&lt;p&gt; * Analyze all Debug and Release configurations&lt;/p&gt;&lt;p&gt; * Only analyze the first matching Debug configuration&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="76"/>
        <source>Analyze all Visual Studio configurations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="597"/>
        <source>Root path:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="613"/>
        <source>Warning tags (separated by semicolon)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="409"/>
        <source>Cppcheck build dir (whole program analysis, incremental analysis, statistics, etc)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="113"/>
        <source>Selected VS Configurations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="362"/>
        <source>Types and Functions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="380"/>
        <source>Libraries</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="432"/>
        <source>Parser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="438"/>
        <source>Cppcheck (built in)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="467"/>
        <source>Check that each class has a safe public interface</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="483"/>
        <source>Limit analysis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="743"/>
        <location filename="projectfile.ui" line="749"/>
        <source>Addons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="755"/>
        <source>Note: Addons require &lt;a href=&quot;https://www.python.org/&quot;&gt;Python&lt;/a&gt; being installed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="765"/>
        <source>Y2038</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="772"/>
        <source>Thread safety</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="782"/>
        <source>Coding standards</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="788"/>
        <source>Misra C 2012</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="827"/>
        <source>Cert C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="836"/>
        <source>CERT-INT35-C:  int precision (if size equals precision, you can leave empty)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="820"/>
        <source>Misra C++ 2008</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="855"/>
        <source>Autosar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="871"/>
        <source>Bug hunting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="894"/>
        <source>Clang analyzer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="887"/>
        <source>Clang-tidy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="60"/>
        <location filename="projectfile.ui" line="422"/>
        <source>Browse...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="231"/>
        <source>Defines must be separated by a semicolon. Example: DEF1;DEF2=5;DEF3=int</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="368"/>
        <source>Platform</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="415"/>
        <source>This is a workfolder that Cppcheck will use for various purposes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="448"/>
        <source>Clang (experimental)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="464"/>
        <source>If you want to design your classes to be as flexible and robust as possible then the public interface must be very robust. Cppcheck will asumme that arguments can take *any* value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="489"/>
        <source>Check code in headers  (should be ON normally. if you want a limited quick analysis then turn this OFF)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="542"/>
        <source>Max recursion in template instantiation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="591"/>
        <source>Warning options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="603"/>
        <source>Filepaths in warnings will be relative to this path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="619"/>
        <source>If tags are added, you will be able to right click on warnings and set one of these tags. You can manually categorize warnings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="629"/>
        <source>Exclude source files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="640"/>
        <source>Exclude folder...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="647"/>
        <source>Exclude file...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="797"/>
        <source>MISRA rule texts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="804"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copy/paste the text from Appendix A &amp;quot;Summary of guidelines&amp;quot; from the MISRA C 2012 pdf to a text file.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="848"/>
        <source>Cert C++</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="865"/>
        <source>Bug hunting (Premium)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="881"/>
        <source>External tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="30"/>
        <source>Import Project (Visual studio / compile database/ Borland C++ Builder 6)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="242"/>
        <source>Undefines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="252"/>
        <source>Undefines must be separated by a semicolon. Example: UNDEF1;UNDEF2;UNDEF3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="403"/>
        <location filename="projectfile.ui" line="458"/>
        <source>Analysis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="499"/>
        <source>Check code in unused templates (should be ON normally, however in theory you can safely ignore warnings in unused templates)</source>
        <oldsource>Check code in unused templates  (slower and less accurate analysis)</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="511"/>
        <source>Max CTU depth</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ProjectFileDialog</name>
    <message>
        <location filename="projectfiledialog.cpp" line="100"/>
        <source>Project file: %1</source>
        <translation>Fichier projet : %1</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="800"/>
        <source>Select include directory</source>
        <translation>Selectionner un répertoire à inclure</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="820"/>
        <source>Select directory to ignore</source>
        <translation>Selectionner un répertoire à ignorer</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="780"/>
        <source>Select a directory to check</source>
        <translation>Selectionner un répertoire à vérifier</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="504"/>
        <source>Select Cppcheck build dir</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="547"/>
        <source>Import Project</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="388"/>
        <source>Clang-tidy (not found)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="828"/>
        <source>Source files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="829"/>
        <source>All files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="830"/>
        <source>Exclude file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="914"/>
        <source>Select MISRA rule texts file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="916"/>
        <source>MISRA rule texts file (%1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="544"/>
        <source>Visual Studio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="545"/>
        <source>Compile database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="546"/>
        <source>Borland C++ Builder 6</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="translationhandler.cpp" line="112"/>
        <source>Language file %1 not found!</source>
        <translation>Fichier de langue %1 non trouvé !</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="118"/>
        <source>Failed to load translation for language %1 from file %2</source>
        <translation>Erreur lors du chargement de la langue %1 depuis le fichier %2</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="87"/>
        <source>Unknown language specified!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="cppchecklibrarydata.cpp" line="35"/>
        <source>line %1: Unhandled element %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="cppchecklibrarydata.cpp" line="40"/>
        <source>line %1: Mandatory attribute &apos;%2&apos; missing in &apos;%3&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="259"/>
        <source> (Not found)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="73"/>
        <source>Thin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="75"/>
        <source>ExtraLight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="77"/>
        <source>Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="79"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="81"/>
        <source>Medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="83"/>
        <source>DemiBold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="85"/>
        <source>Bold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="87"/>
        <source>ExtraBold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="89"/>
        <source>Black</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="73"/>
        <source>Editor Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="76"/>
        <source>Editor Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="79"/>
        <source>Highlight Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="82"/>
        <source>Line Number Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="85"/>
        <source>Line Number Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="88"/>
        <source>Keyword Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="91"/>
        <source>Keyword Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="97"/>
        <source>Class Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="100"/>
        <source>Quote Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="103"/>
        <source>Quote Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="106"/>
        <source>Comment Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="109"/>
        <source>Comment Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="112"/>
        <source>Symbol Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="115"/>
        <source>Symbol Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="118"/>
        <source>Symbol Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="138"/>
        <source>Set to Default Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="140"/>
        <source>Set to Default Dark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="94"/>
        <source>Class Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QPlatformTheme</name>
    <message>
        <location filename="translationhandler.cpp" line="35"/>
        <source>OK</source>
        <translation type="unfinished">OK</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="36"/>
        <source>Cancel</source>
        <translation type="unfinished">Annuler</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="37"/>
        <source>Close</source>
        <translation type="unfinished">Fermer</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="38"/>
        <source>Save</source>
        <translation type="unfinished">Sauvegarder</translation>
    </message>
</context>
<context>
    <name>ResultsTree</name>
    <message>
        <location filename="resultstree.cpp" line="1429"/>
        <source>File</source>
        <translation type="unfinished">Fichier</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1429"/>
        <source>Severity</source>
        <translation type="unfinished">Sévérité</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1429"/>
        <source>Line</source>
        <translation type="unfinished">Ligne</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="156"/>
        <source>Undefined file</source>
        <translation>Fichier indéterminé</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="737"/>
        <location filename="resultstree.cpp" line="751"/>
        <source>Cppcheck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="825"/>
        <source>Could not start %1

Please check the application path and parameters are correct.</source>
        <translation>Ne peut pas démarrer %1

Merci de vérifier que le chemin de l&apos;application et que les paramètres sont corrects.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="335"/>
        <source>style</source>
        <translation>erreur de style</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="338"/>
        <source>error</source>
        <translation>erreur</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1429"/>
        <source>Summary</source>
        <translation>Résumé</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="657"/>
        <source>Hide</source>
        <translation>Cacher</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="778"/>
        <source>Could not find the file!</source>
        <translation>Fichier introuvable !</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="847"/>
        <source>Select Directory</source>
        <translation>Selectionner dossier</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="341"/>
        <source>warning</source>
        <translation>avertissement</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="344"/>
        <source>performance</source>
        <translation>performance</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="347"/>
        <source>portability</source>
        <translation>portabilité</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="350"/>
        <source>information</source>
        <translation>information</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="353"/>
        <source>debug</source>
        <translation>débogage</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="738"/>
        <source>No editor application configured.

Configure the editor application for Cppcheck in preferences/Applications.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="752"/>
        <source>No default editor application selected.

Please select the default editor application in preferences/Applications.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1429"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="658"/>
        <source>Hide all with id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="659"/>
        <source>Open containing folder</source>
        <translation>Ouvrir l&apos;emplacement du fichier</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1429"/>
        <source>Inconclusive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="655"/>
        <source>Recheck</source>
        <translation>Revérifier</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="278"/>
        <source>note</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="677"/>
        <source>Suppress selected id(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="693"/>
        <location filename="resultstree.cpp" line="1429"/>
        <source>Tag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="695"/>
        <source>No tag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1429"/>
        <source>Since date</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="839"/>
        <source>Could not find file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="843"/>
        <source>Please select the folder &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="844"/>
        <source>Select Directory &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="846"/>
        <source>Please select the directory where file is located.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="656"/>
        <source>Copy</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ResultsView</name>
    <message>
        <location filename="resultsview.ui" line="26"/>
        <source>Results</source>
        <translation>Résultats</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="281"/>
        <location filename="resultsview.cpp" line="292"/>
        <source>Cppcheck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="282"/>
        <source>No errors found.</source>
        <translation>Pas d&apos;erreurs trouvées.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="289"/>
        <source>Errors were found, but they are configured to be hidden.
To toggle what kind of errors are shown, open view menu.</source>
        <translation>Des erreurs ont été trouvées mais sont configurées pour rester cachées.
Pour configurer les erreurs affichées, ouvrez le menu d&apos;affichage.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="410"/>
        <source>Bug hunting analysis is incomplete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="183"/>
        <location filename="resultsview.cpp" line="191"/>
        <source>Failed to save the report.</source>
        <translation>Erreur lors de la sauvegarde du rapport.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="336"/>
        <location filename="resultsview.cpp" line="355"/>
        <source>Failed to read the report.</source>
        <translation>Erreur lors de la lecture du rapport</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="264"/>
        <source>%p% (%1 of %2 files checked)</source>
        <translation>%p% (%1 fichiers sur %2 vérifiés)</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="408"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="201"/>
        <source>Print Report</source>
        <translation>Imprimer le rapport</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="220"/>
        <source>No errors found, nothing to print.</source>
        <translation>Aucune erreur trouvée. Il n&apos;y a rien à imprimer</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="403"/>
        <source>First included by</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="343"/>
        <source>XML format version 1 is no longer supported.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="82"/>
        <source>Analysis Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="104"/>
        <source>Warning Details</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="484"/>
        <source>Clear Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="485"/>
        <source>Copy this Log entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="486"/>
        <source>Copy complete Log</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScratchPad</name>
    <message>
        <location filename="scratchpad.ui" line="14"/>
        <source>Scratchpad</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="71"/>
        <source>filename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="78"/>
        <source>Check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="20"/>
        <source>Copy or write some C/C++ code here:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="37"/>
        <source>Optionally enter a filename (mainly for automatic language detection) and click on &quot;Check&quot;:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Settings</name>
    <message>
        <location filename="settings.ui" line="14"/>
        <source>Preferences</source>
        <translation>Préférences</translation>
    </message>
    <message>
        <location filename="settings.ui" line="24"/>
        <source>General</source>
        <translation>Général</translation>
    </message>
    <message>
        <location filename="settings.ui" line="41"/>
        <source>Number of threads: </source>
        <translation>Nombre de fils : </translation>
    </message>
    <message>
        <location filename="settings.ui" line="121"/>
        <source>Show full path of files</source>
        <translation>Montrer le chemin complet des fichiers</translation>
    </message>
    <message>
        <location filename="settings.ui" line="128"/>
        <source>Show &quot;No errors found&quot; message when no errors found</source>
        <translation>Afficher un message &quot;Pas d&apos;erreur trouvée&quot; lorsque aucune erreur est trouvée</translation>
    </message>
    <message>
        <location filename="settings.ui" line="163"/>
        <source>Check for updates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="191"/>
        <source>Applications</source>
        <translation>Applications</translation>
    </message>
    <message>
        <location filename="settings.ui" line="246"/>
        <source>Reports</source>
        <translation>Rapports</translation>
    </message>
    <message>
        <location filename="settings.ui" line="252"/>
        <source>Save all errors when creating report</source>
        <translation>Sauvegarder toutes les erreurs lorsqu&apos;un rapport est créé</translation>
    </message>
    <message>
        <location filename="settings.ui" line="259"/>
        <source>Save full path to files in reports</source>
        <translation>Sauvegarder le chemin complet des fichiers dans les rapports</translation>
    </message>
    <message>
        <location filename="settings.ui" line="202"/>
        <source>Add...</source>
        <translation>Ajouter...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="85"/>
        <source>Ideal count:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="114"/>
        <source>Force checking all #ifdef configurations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="142"/>
        <source>Enable inline suppressions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="280"/>
        <source>Language</source>
        <translation>Langue</translation>
    </message>
    <message>
        <location filename="settings.ui" line="216"/>
        <source>Remove</source>
        <translation>Supprimer</translation>
    </message>
    <message>
        <location filename="settings.ui" line="209"/>
        <location filename="settings.ui" line="485"/>
        <source>Edit...</source>
        <translation>Editer...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="223"/>
        <source>Set as default</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="135"/>
        <source>Display error Id in column &quot;Id&quot;</source>
        <translation>Afficher l&apos;identifiant d&apos;erreur Id dans la colonne &quot;Id&quot;</translation>
    </message>
    <message>
        <location filename="settings.ui" line="149"/>
        <source>Check for inconclusive errors also</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="183"/>
        <source>Show internal warnings in log</source>
        <translation>Montrer les avertissements internes dans le journal</translation>
    </message>
    <message>
        <location filename="settings.ui" line="156"/>
        <source>Show statistics on check completion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="294"/>
        <source>Addons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="300"/>
        <source>Python binary (leave this empty to use python in the PATH)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="311"/>
        <location filename="settings.ui" line="352"/>
        <location filename="settings.ui" line="397"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="378"/>
        <source>Clang</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="384"/>
        <source>Clang path (leave empty to use system PATH)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="407"/>
        <source>Visual Studio headers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="413"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Paths to Visual Studio headers, separated by semicolon &apos;;&apos;.&lt;/p&gt;&lt;p&gt;You can open a Visual Studio command prompt, write &amp;quot;SET INCLUDE&amp;quot;. Then copy/paste the paths.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="330"/>
        <source>MISRA addon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="338"/>
        <source>MISRA rule texts file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="345"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copy/paste the text from Appendix A &amp;quot;Summary of guidelines&amp;quot; from the MISRA C 2012 pdf to a text file.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="443"/>
        <source>Code Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="449"/>
        <source>Code Editor Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="462"/>
        <source>Default Light Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="469"/>
        <source>Default Dark Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="478"/>
        <source>Custom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="455"/>
        <source>System Style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="settingsdialog.cpp" line="239"/>
        <source>Add a new application</source>
        <translation>Ajouter une nouvelle application</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="269"/>
        <source>Modify an application</source>
        <translation>Modifier une application</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="114"/>
        <source>N/A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="299"/>
        <source>[Default]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="274"/>
        <source> [Default]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="228"/>
        <source>The executable file &quot;%1&quot; is not available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="354"/>
        <source>Select python binary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="392"/>
        <source>Select clang path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="361"/>
        <source>Select MISRA File</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StatsDialog</name>
    <message>
        <location filename="statsdialog.ui" line="14"/>
        <location filename="statsdialog.ui" line="248"/>
        <location filename="statsdialog.cpp" line="162"/>
        <location filename="statsdialog.cpp" line="209"/>
        <source>Statistics</source>
        <translation>Statistiques</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="27"/>
        <location filename="statsdialog.cpp" line="200"/>
        <source>Project</source>
        <translation>Projet</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="33"/>
        <source>Project:</source>
        <translation>Projet :</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="53"/>
        <source>Paths:</source>
        <translation>Chemins :</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="85"/>
        <source>Include paths:</source>
        <translation>Inclure les chemins :</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="108"/>
        <source>Defines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="165"/>
        <location filename="statsdialog.cpp" line="205"/>
        <source>Previous Scan</source>
        <translation>Analyse précédente</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="171"/>
        <source>Path Selected:</source>
        <translation>Chemin sélectionné :</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="181"/>
        <source>Number of Files Scanned:</source>
        <translation>Nombre de fichiers analysés :</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="201"/>
        <source>Scan Duration:</source>
        <translation>Durée de l&apos;analyse :</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="256"/>
        <source>Errors:</source>
        <translation>Erreurs :</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="274"/>
        <source>Warnings:</source>
        <translation>Avertissements</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="292"/>
        <source>Stylistic warnings:</source>
        <translation>Avertissements de style</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="310"/>
        <source>Portability warnings:</source>
        <translation>Avertissements de portabilité</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="328"/>
        <source>Performance issues:</source>
        <translation>Problème de performance</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="346"/>
        <source>Information messages:</source>
        <translation>Messages d&apos;information :</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="407"/>
        <source>Copy to Clipboard</source>
        <translation>Copier vers le presse-papier</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="138"/>
        <source>1 day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="138"/>
        <source>%1 days</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="140"/>
        <source>1 hour</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="140"/>
        <source>%1 hours</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="142"/>
        <source>1 minute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="142"/>
        <source>%1 minutes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="144"/>
        <source>1 second</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="144"/>
        <source>%1 seconds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="148"/>
        <source>0.%1 seconds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="150"/>
        <source> and </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="199"/>
        <source>Project Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="201"/>
        <source>Paths</source>
        <translation type="unfinished">Chemins</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="202"/>
        <source>Include paths</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="203"/>
        <source>Defines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="206"/>
        <source>Path selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="207"/>
        <source>Number of files scanned</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="208"/>
        <source>Scan duration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="164"/>
        <location filename="statsdialog.cpp" line="210"/>
        <source>Errors</source>
        <translation type="unfinished">Erreurs</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="166"/>
        <location filename="statsdialog.cpp" line="211"/>
        <source>Warnings</source>
        <translation type="unfinished">Avertissements</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="168"/>
        <location filename="statsdialog.cpp" line="212"/>
        <source>Style warnings</source>
        <translation type="unfinished">Avertissement de style</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="170"/>
        <location filename="statsdialog.cpp" line="213"/>
        <source>Portability warnings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="172"/>
        <location filename="statsdialog.cpp" line="214"/>
        <source>Performance warnings</source>
        <translation type="unfinished">Avertissements de performance</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="174"/>
        <location filename="statsdialog.cpp" line="215"/>
        <source>Information messages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="414"/>
        <source>Pdf Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="177"/>
        <source>Export PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="363"/>
        <source>History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="369"/>
        <source>File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="90"/>
        <source>File: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="90"/>
        <source>No cppcheck build dir</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="131"/>
        <source>Undefines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="204"/>
        <source>Undefines</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ThreadResult</name>
    <message>
        <location filename="threadresult.cpp" line="52"/>
        <source>%1 of %2 files checked</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TranslationHandler</name>
    <message>
        <location filename="translationhandler.cpp" line="125"/>
        <source>Failed to change the user interface language:

%1

The user interface language has been reset to English. Open the Preferences-dialog to select any of the available languages.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="131"/>
        <source>Cppcheck</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TxtReport</name>
    <message>
        <location filename="txtreport.cpp" line="74"/>
        <source>inconclusive</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>toFilterString</name>
    <message>
        <location filename="common.cpp" line="53"/>
        <source>All supported files (%1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="common.cpp" line="58"/>
        <source>All files (%1)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
