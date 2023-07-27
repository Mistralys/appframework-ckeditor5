/**
 * Import the editor and the sources of all plugins to include in the build.
 *
 * NOTE: The import assumes loading from the <code>node_modules</code> directory,
 * so paths can be set relative to it.
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import PasteAsPlainText from 'ckeditor5-paste-plaintext/src/plaintext';

class FrameworkEditor extends ClassicEditor {}

/*
 * All plugins to include in the build, independently of whether
 * they are enabled in the editor configuration.
 */
FrameworkEditor.builtinPlugins = [
	Alignment,
	Autoformat,
	BlockQuote,
	Bold,
	Essentials,
	Indent,
	Italic,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	Superscript,
	Strikethrough,
	TextTransformation,
	PasteAsPlainText
];

/**
 * The default toolbar configuration.
 */
FrameworkEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'strikethrough',
			'superscript',
			'|',
			'link',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'removeFormat',
			'pasteAsPlainText',
			'|',
			'undo',
			'redo'
		]
	},
	language: 'en'
};

/**
 * Utility object that holds references to all available plugins,
 * to be used at runtime. The markup editor's <code>addPlugin()</code>
 * method uses this object to add plugins to the editor instance.
 *
 * @link themes/default/templates/ui/markup-editor/ckeditor/command.php The template that builds the CKEditor instance.
 */
window.CKPlugins = {
	'Alignment': Alignment,
	'BlockQuote': BlockQuote,
	'Bold': Bold,
	'Essentials': Essentials,
	'Italic': Italic,
	'Link': Link,
	'List': List,
	'Paragraph': Paragraph,
	'PasteFromOffice': PasteFromOffice,
	'RemoveFormat': RemoveFormat,
	'Superscript': Superscript,
	'Strikethrough': Strikethrough,
	'TextTransformation': TextTransformation,
	'PasteAsPlainText': PasteAsPlainText,
};

/**
 * Make the class available in the browser directly.
 */
window.CKEditor = FrameworkEditor;
