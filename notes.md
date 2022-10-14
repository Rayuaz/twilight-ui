- Fazer um script para que o tamanho mínimo das janelas seja igual ao tamanho da navbar
- Ajustar o fundo dos botões nas abas onde há navbar
- Adicionar funcionalidade de pinnar abas
- `oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'` - ```<!--TEXT-AREA-->
  <textarea id="textBox1" name="content" TextMode="MultiLine" onkeyup="setHeight('textBox1');" onkeydown="setHeight('textBox1');">Hello World</textarea>

<!--JAVASCRIPT-->
<script type="text/javascript">
function setHeight(fieldId){
    document.getElementById(fieldId).style.height = document.getElementById(fieldId).scrollHeight+'px';
}
setHeight('textBox1');
</script>```
