import Header from '@editorjs/header';
import Image from '@editorjs/image';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';

export default {
  header: {
    class: Header,
    inlineToolbar: true
  },
  image: {
    class: Image,
    inlineToolbar: true,
    endpoints: {
      byUrl: "http://localhost:3333/upload-image"
    }
  },
  embed: {
    class: Embed,
    inlineToolbar: true
  },
  quote: {
    class: Quote,
    inlineToolbar: true
  }
}