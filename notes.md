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

#sidebar .scenes-sidebar, #sidebar.collapsed .scenes-sidebar {--sidebar-scene-height: 56px;}

#sidebar .directory .directory-item:not(.folder) {
background: linear-gradient(45deg, rgba(0,0,0,.3), transparent);
margin-bottom: 8px;
border-radius: 8px;
}

#sidebar .directory .directory-item:not(.folder) h4 {
font-weight: 700;
}

#sidebar .directory .directory-item.folder .folder-header {
background: transparent;
padding: 4px;
align-items: center;
}

#sidebar .directory .directory-item.folder {
border-radius: 8px!important;
background: linear-gradient(45deg, rgba(0,0,0,.3), transparent);
padding: 0;
border-left: 1px solid var(--tui-bg-color);
position: relative;
}

#sidebar .directory .directory-item.folder:after {
position: absolute;
top: 0;
left: 0;
width: 5%;
height: 100%;
background: linear-gradient(90deg, var(--tui-bg-colorT), transparent);
content: '';
border-radius: 8px 0 0 8px;
transition: all .12s ease-in-out;
z-index: -1;
}

#sidebar .directory .directory-item.folder .folder-header:hover {
cursor: pointer;
}

#sidebar .directory .directory-item.folder:has( > .folder-header:hover):after {
width: 50%;
}

#sidebar .directory .directory-item.folder .folder-header h3 {
/_ font-weight: 400; _/
letter-spacing: 2px;
font-size: .9rem;
text-transform: uppercase;
display: flex;
align-items: center;
}

#sidebar .directory .directory-item.folder .subdirectory {
padding: 0;
padding-left: 16px;
border: none;
}

#sidebar .directory .directory-item:not(.folder) {
position: relative;
}

#sidebar .directory .directory-item:not(.folder):after {
position: absolute;
top: 0;
left: 0;
content: '';
width: 0%;
height: 100%;
background: linear-gradient(90deg, var(--tui-bg-colorT, rgba(0,0,0,.5)) 0%, transparent 50%);
transition: background .12s ease-in-out;
border-radius: 8px 0 0 8px;
visibility: hidden;
z-index: -1;
}

#sidebar .directory .directory-item:not(.folder):hover:after {
width: 100%;
visibility: visible;
}

#sidebar .directory .directory-item.folder .subdirectory .directory-item {
background: transparent;
transition: all 1s ease-in-out;
}

#sidebar .directory .directory-item.folder.collapsed {
padding: 0;
}

#sidebar .directory .directory-item.folder.collapsed .folder-header {
padding: 16px 8px;
padding-left: 16px;
padding: 4px;
}

li.folder > .folder-header h3 > i {
height: var(--sidebar-item-height);
width: var(--sidebar-item-height);
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
}

li.folder > .folder-header .create-button .fa-plus {
background: var(--tui-bg-color);
background: white;
color: black;
display: block;
box-shadow: -3px 2px 0px -1px rgb(0 0 0 / 75%);
}

li.folder > .folder-header .create-button {color: rgba(255,255,255,.5);}

#sidebar .directory .directory-item:not(.folder):hover, #sidebar.collapsed .directory .directory-item:not(.folder):hover {
background: linear-gradient(45deg, rgba(0,0,0,.3), transparent);
}
