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

- Considerar esse estilo pros botões:

#sidebar .directory .directory-header .action-buttons button {
text-transform: uppercase;
font-size: .8rem;
letter-spacing: 2px;
font-weight: 600;
padding-top: 12px;
padding-bottom: 12px;
}

#sidebar .directory .directory-header .action-buttons button i {
font-size: .9em;
font-weight: 700!important;
color: var(--tui-accent)
}
