<script lang="ts">
    // ⚠️ NOTE: We don't use @ckeditor/ckeditor5-build-classic any more!
    // Since we're building CKEditor&nbsp;5 from source, we use the source version of ClassicEditor.
    import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
  
    import { Essentials } from '@ckeditor/ckeditor5-essentials';
    import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
    import { Link } from '@ckeditor/ckeditor5-link';
    import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
    import { Font } from '@ckeditor/ckeditor5-font';
    import { Alignment } from '@ckeditor/ckeditor5-alignment';
  
    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p><br/><br/><br/><br/></p>',
                editorConfig: {
                    plugins: [
                        Essentials,
                        Bold,
                        Italic,
                        Link,
                        Paragraph,
                        Font,
                        Alignment,
                        Underline
                    ],
  
                    toolbar: {
                        items: [
                            'fontFamily',
                            'fontSize',
                            'bold',
                            'italic',
                            'underline',
                            'alignment',
                            'undo',
                            'redo'
                        ]
                    }
                }
            };
        }
    };
  </script>
  
  <template>
     <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
  </template>