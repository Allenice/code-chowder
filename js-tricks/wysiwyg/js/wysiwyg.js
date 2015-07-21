function iframeOn() {
  richTextField.document.designMode = 'On';
}

function iBold() {
  richTextField.document.execCommand('bold', false, null);
}

function iUnderline() {
  richTextField.document.execCommand('underline', false, null);

}

function iItalic() {
  richTextField.document.execCommand('italic', false, null);
}

function iFontSize() {
  var size = prompt('输入字体大小', '1');
  richTextField.document.execCommand('FontSize', false, size);
}

function iForeColor() {
  var color = prompt('输入颜色', 'red');
  richTextField.document.execCommand('ForeColor', false, color);
}

function iHorizontalRule() {
  richTextField.document.execCommand('inserthorizontalrule', false, null);
}

function iUnorderedList() {
  richTextField.document.execCommand('insertorderedlist', false, 'newUL');
}

function iOrderedList() {
  richTextField.document.execCommand('insertunorderedlist', false, 'newOL');
}

function iLink() {
  var link = prompt('输入连接', 'http://');
  richTextField.document.execCommand('CreateLink', false, link);

}

function iUnLink() {
  richTextField.document.execCommand('Unlink', false, null);

}

function iImage() {
  var src = prompt('输入图片地址：', 'http://');
  richTextField.document.execCommand('InsertImage', false, src);
}