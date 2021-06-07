function init_colors() {
    
    var colors = ["--col1", "--col2", "--col3"];
    var kinds = [
                    ["light", 60],
                    ["dark", -30],
                    ["xlight", 100],
                    ["xdark", -100]
                ];
    var extra_css = document.getElementById("more_style");
    
    var template_css = `
.w3-NUM-col-KIND,.w3-hover-NUM-col-KIND:hover{color:var(--colNUM-dark);background-color:var(--colNUM-KIND)!important}
.w3-border-NUM-col-KIND,.w3-hover-border-NUM-col-KIND:hover{border-color:var(--colNUM-KIND)!important}`
    
    colors.forEach((item,index) => {
        var col = getComputedStyle(document.body).getPropertyValue(item);
        
        kinds.forEach((kind,index) => {
            document.documentElement.style.setProperty(item+"-"+kind[0], LightenDarkenColor(col, kind[1]));
            extra_css.innerText = extra_css.innerText + template_css.replaceAll("KIND", kind[0]).replaceAll("NUM", item.replace("--col", ""));
        }
        );
        
    });
    
}

function switch_content(id) {
    
    var ok_content = document.getElementById(id);
    var i;
    var all_contents = document.getElementsByClassName("page-sub-content");
        
    for (i=0; i<all_contents.length; i++) {
        
        var content = all_contents[i];
        
        content.style.display = "none";
        
        var button_id = content.id.replace("Content", "Button");
        var button = document.getElementById(button_id);
                        
        if (button.className.indexOf("-light") == -1) {
            button.className =
            button.className.replace("-col", "-col-light");
            // LightenBg(button, 60);
        }
    }
    
    if (id != "PublicationsContent") {
        var x = document.getElementById("PublicationsList");
            if (x.className.indexOf("w3-show") != -1) {
                x.className = x.className.replace(" w3-show", "");

                if (x.previousElementSibling.className.indexOf("-light") == -1) {
                    x.previousElementSibling.className =
                    x.previousElementSibling.className.replace("-col", "-col-light");
                    // LightenBg(x.previousElementSibling, 60);
                }
        }
    }
        
    ok_content.style.display = "block";
    
    var ok_button_id = ok_content.id.replace("Content", "Button");
    var ok_button = document.getElementById(ok_button_id);
    ok_button.className = ok_button.className.replace("-col-light", "-col");
    // DarkenBg(ok_button, 60);
}

function w3_open() {
  // document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
  document.getElementById("mySidebar").style.left = "0px";
}

function w3_close() {
  document.getElementById("myOverlay").style.display = "none";
  document.getElementById("mySidebar").style.left = "-250px";
}

function myFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show"; 
      
    if (x.previousElementSibling.className.indexOf("lighter") != -1) {
        x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" lighter", "");
        DarkenBg(x.previousElementSibling, 60);
    }
  } else { 
    x.className = x.className.replace(" w3-show", "");
      
//     if (x.previousElementSibling.className.indexOf("lighter") == -1) {
//         x.previousElementSibling.className += " lighter";
//         LightenBg(x.previousElementSibling, 60);
//     }
  }
}

function openPaper(paperName) {
  
  var i;
  var x = document.getElementsByClassName("paper");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x = document.getElementsByClassName("test");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" w3-1-col-light", " w3-1-col-xlight");
  }
  document.getElementById(paperName).style.display = "block";
  event.currentTarget.className = event.currentTarget.className.replace(" w3-1-col-xlight", " w3-1-col-light");
  switch_content("PublicationsContent");
}

function create_element(item_id, item) {
    
    var side_main = document.getElementById("PublicationsList");
    var full_main = document.getElementById("PublicationsContent");
    
    
    var side_id = "";
    if (side_main.childElementCount == 0) {
        side_id = 'id="firstTab"';
    } else {
        side_id = '';
    }
    
    var div = document.createElement("div");
    div.innerHTML = item.abstract;
    var clean_text = div.textContent || div.innerText || "";
    clean_text = clean_text.replace("\n", "").replace("\r", "");
    
    var author_list = item.authors.split(",");
    var author_etal = author_list[0];
    if (author_list.length > 1) {
        author_etal = author_etal+","+author_list[1];
        if (author_list.length > 2) {
            author_etal = author_etal+" et al.";
        }
    }
    
    var side_html = `

<a
 href="javascript:void(0)"
 class="w3-bar-item w3-button w3-border-bottom test w3-padding-small w3-1-col-xlight w3-hover-1-col-light"
 onclick="openPaper('`+item_id+`');w3_close();
 "`+side_id+`
>
<div class="w3-container" title="`+item.title+`">

<p style="margin-bottom: 0em" class="short-text">`+item.title+`</p>

<p class="w3-opacity fa-xs" style="margin-top: 0em">`+author_etal+`</p>

</div>
</a>


`;
    
    var full_html = `
<div id="`+item_id+`" class="w3-container paper">

<div class="w3-container w3-1-col" style="color: #fff; ">
<h3>`+item.title+`</h3>
</div>


<table class="w3-text-gray" style="border-collapse: separate; border-spacing: 0; margin-top:1em">
<colgroup>
<col style="width:2em">
</colgroup>

<tr>
<td style="text-align:center"><i class="fa fa-users"></i></td>
<td>`+item.authors+`</td>
</tr>

<tr>
<td style="text-align:center"><i class="fa fa-map-marker-alt"></i></td>
<td>`+item.location+`</td>
</tr>

<tr>
<td style="text-align:center"><i class="fa fa-clock"></i></td>
<td>`+item.date+`</td>
</tr>

</table>

<div style="text-align:center;">
<img class="w3-round" src="`+item.image+`" style="width:80%; ">
</div>


<div class="w3-row-padding" style="padding-left:0; padding-right:0;">

<div class="w3-col m7" style="padding-left:0;">
<h4>Abstract</h4>
<div class = "w3-light-gray w3-container w3-padding-16" >
`+item.abstract+`
</div>
</div>

<div class="w3-col m5">

<h4>Link</h4>
<a href="`+item.url+`" target="_blank">`+item.url+`</a> <i class="fa fa-external-link-alt"></i>

<h4>Other resources</h4>
`+item.other+`

</div>

</div>




<h4>BibTex</h4>
<div class="w3-code notranslate w3-border-1-col w3-light-gray fa-xs">
`+item.bibtex.trim().replaceAll("\n", "<br>")+`
</div>

</div>
`;
    side_main.insertAdjacentHTML('beforeend', side_html);
    full_main.insertAdjacentHTML('beforeend', full_html);
    
    
    // var span_elements = document.getElementById("PublicationsList").getElementsByTagName("span");
// var a_elements = document.getElementById("PublicationsList").getElementsByTagName("a");
// var last_hover_span = span_elements[span_elements.length-1];
// var last_content_span = a_elements[a_elements.length-1];
// console.log(last_content_span.clientHeight);
// console.log(last_hover_span.clientHeight);
// last_hover_span.style.height = last_content_span.clientHeight+"px";
// console.log(last_hover_span.clientHeight);
    
   
}


function getStyle(el,styleProp)
{
    if (el.currentStyle)
        return el.currentStyle[styleProp];

    return document.defaultView.getComputedStyle(el,null)[styleProp];
}

function DarkenBg(item, amt) {
    var current_col = item.style.backgroundColor;
    var new_col = DarkenCol(current_col, 60);
    item.style.backgroundColor = new_col;
    item.style.color = "#fff";
}

function LightenBg(item, amt) {
    var current_col = item.style.backgroundColor;
    var new_col = LightenCol(current_col, 60);
    item.style.backgroundColor = new_col;
    item.style.color = DarkenCol(current_col, 30);
}


function LightenCol(col, amt) {
    
    var rgb_vals = col.split("(")[1].split(")")[0].split(",");
    var r_val = Math.min(parseInt(rgb_vals[0]) + amt, 255);
    var g_val = Math.min(parseInt(rgb_vals[1]) + amt, 255);
    var b_val = Math.min(parseInt(rgb_vals[2]) + amt, 255);
    
    return "rgb("+r_val+","+g_val+","+b_val+")"; 
    
}

function DarkenCol(col, amt) {
    
    var rgb_vals = col.split("(")[1].split(")")[0].split(",");
    var r_val = Math.max(parseInt(rgb_vals[0]) - amt, 0);
    var g_val = Math.max(parseInt(rgb_vals[1]) - amt, 0);
    var b_val = Math.max(parseInt(rgb_vals[2]) - amt, 0);
    
    return "rgb("+r_val+","+g_val+","+b_val+")"; 
    
}

function LightenDarkenColor(col, amt) {
  
    col = col.trim();
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
     
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}