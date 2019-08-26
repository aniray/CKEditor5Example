import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKFinder, CKFinderEditing, CKFinderUI, CKFinderUploadAdapter} from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';

import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ckedemo';
  public Editor = ClassicEditor;
  public model = {
    editorData: '<p>Hello, world!</p>'
};
  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}
 
  constructor() {
    this.Editor.create(document.querySelector('#editor'), {
      plugins: [CKFinder,CKFinderEditing, CKFinderUI, CKFinderUploadAdapter],

      // Enable the "Insert image" button in the toolbar.
      //toolbar: ['imageUpload'],

      ckfinder: {
        // Upload the images to the server using the CKFinder QuickUpload command.
        uploadUrl: 'https://ckeditor.com/apps/ckfinder/3.5.0/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'
      }
    })
      .then( function(){
        console.log("then printed");
        throw('An unhandled exception.');
      })
      .catch(function(){
      console.log("error");
    });
  };
}
  


