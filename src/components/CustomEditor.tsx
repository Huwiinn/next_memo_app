import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const CustomEditor = ({ setData }: any) => {
  const edrtorConfiguration = {
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "outdent",
        "indent",
        "imageUpload",
        "blockQuote",
        "|",
        "insertTable",
        "mediaEmbed",
        "undo",
        "redo",
        "alignment",
        "codeBlock",
        "code",
        "findAndReplace",
        "fontBackgroundColor",
        "fontColor",
        "fontSize",
        "fontFamily",
        "highlight",
        "horizontalLine",
        "htmlEmbed",
        "imageInsert",
        "pageBreak",
        "selectAll",
        "removeFormat",
        "sourceEditing",
        "specialCharacters",
        "strikethrough",
        "restrictedEditingException",
        "subscript",
        "style",
        "superscript",
        "textPartLanguage",
        "todoList",
        "underline",
      ],
    },
    language: "ko",
    image: {
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
        "linkImage",
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableCellProperties",
        "tableProperties",
      ],
    },
  };

  return (
    <CKEditor
      editor={Editor}
      config={edrtorConfiguration}
      data="<p> 반가워요 ~ </p>"
      onChange={(event, editor) => {
        setData(editor.getData()); // 에디터 작성 내용 저장
      }}
    />
  );
};

export default CustomEditor;
