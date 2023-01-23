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

#sidebar .directory .directory-header .action-buttons button {
width: 42px;
height: 42px;
flex: auto;
position: absolute;
top: 0;
left: -50px;
margin-top: 16px;
}

#sidebar .directory .directory-header .action-buttons button i {
margin: 0;
}

#sidebar .directory .directory-header .action-buttons button.second, #sidebar .directory .directory-header .action-buttons button.create-folder {
top: 50px;
}

#sidebar .directory .directory-header .action-buttons button.third {
top: 100px;
}

#sidebar .directory .directory-header .action-buttons button.fourth {
top: 150px;
}

#sidebar .directory .directory-header .action-buttons {
visibility: hidden;
height: 0;
}

#sidebar .directory .directory-header .action-buttons button {
visibility: visible;
}

#sidebar .directory .directory-header, #sidebar.collapsed .directory .directory-header {
gap: 0;
}

#sidebar .directory .directory-header .action-buttons button {
/_ background: rgba(0,0,0,.25); _/
}

#sidebar .directory .directory-header .action-buttons button i {
color: white;
text-shadow: rgba(0,0,0,.4) 2px 2px 4px;
}
