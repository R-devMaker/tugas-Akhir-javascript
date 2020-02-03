function buat_login(){
    var rem_btn = document.getElementById("x");
    rem_btn.parentElement.removeChild(rem_btn);

    var p = document.createElement("p");
    p.className = "tulisan_login";
    p.innerHTML = "Silahkan Mendaftar";
    var element = document.getElementsByTagName("div")[0];
    element.appendChild(p);

    var form = document.createElement("form");
    element.appendChild(form);

    var label_name = document.createElement("label");
    label_name.innerHTML = "Nama User";
    form.appendChild(label_name);

    var inp_name = document.createElement("input");
    inp_name.type = "text";
    inp_name.name = "name";
    inp_name.placeholder = "Nama User..";
    inp_name.className = "form_login";
    form.appendChild(inp_name);

    var label_hp = document.createElement("label");
    label_hp.innerHTML = "Nomor Handphone";
    form.appendChild(label_hp);

    var inp_hp = document.createElement("input");
    inp_hp.type = "tel";
    inp_hp.name = "phone";
    inp_hp.pattern = "[0-9]{4}-[0-9]{4}-[0-9]{4}";
    inp_hp.placeholder = "Nomor Handphone..";
    inp_hp.className = "form_login";
    form.appendChild(inp_hp);

    var label_username = document.createElement("label");
    label_username.innerHTML = "Username";
    form.appendChild(label_username);

    var inp_username = document.createElement("input");
    inp_username.type = "text";
    inp_username.name = "username";
    inp_username.placeholder = "Username atau Email";
    inp_username.className = "form_login";
    form.appendChild(inp_username);

    var label_pass = document.createElement("label");
    label_pass.innerHTML = "Password";
    form.appendChild(label_pass);

    var inp_pass = document.createElement("input");
    inp_pass.type = "password";
    inp_pass.name = "password";
    inp_pass.placeholder = "Password..";
    inp_pass.className = "form_login";
    form.appendChild(inp_pass);

    var btn_submit = document.createElement("input");
    btn_submit.type = "submit";
    btn_submit.value = "DAFTAR SEKARANG";
    btn_submit.className = "tombol_login";
    form.appendChild(btn_submit);
}