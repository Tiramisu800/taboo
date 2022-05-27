var obj = {
    "Nature": ["1a", "6b", "8b", "12a", "14a", "16a", "21b", "23b", "27a", "29a"],
    "Technique": ["1b", "4a", "7a", "9a", "10b", "16b", "19a", "22a", "24a", "25b"],
    "Other people": ["2a", "4b", "11a", "12b", "15a", "17a", "19b", "26a", "27b", "30a"],
    "Sign systems": ["2b", "5a", "7b", "13a", "14b", "17b", "20a", "22b", "28a", "29b"],
    "Artistic images": ["3a", "5b", "8a", "9b", "11b", "18a", "20b", "23a", "24b", "26b"],
    "Self-development": ["3b", "6a", "10a", "13b", "15b", "18b", "21a", "25a", "28b", "30b"]
};

        window.addEventListener("DOMContentLoaded", function() {
        var table = document.querySelector("table"),
        tr = table.querySelectorAll("tr"),
        num = 0,
        len = tr.length,
        arr = [];
        table.addEventListener("click", function(event) {
        var el = event.target;
        if (el.tagName == "TD") {
        var text = tr[num].cells[el.cellIndex < 2 ? 0 : 2].textContent.trim();
        arr.push(text);
        document.querySelector(".active").classList.remove("active");
        ++num;
        if (num < len) tr[num].classList.add("active");
        else Object.keys(obj).forEach(function(key) {
        var ar = obj[key],
        n = ar.length;
        ar = ar.reduce(function(a, b) {
        return a += +!!~arr.indexOf(b)
    }, 0);
        var h = document.createElement("h1");
        h.textContent = key + " : " + 100 / n * ar + "%";
        document.body.appendChild(h)
    })
    }
    })
    });

/*window.onload=function (){
    let result ={};
    let step = 0;
    function showQuestion(questionNumber){
        document.querySelector(".question").innerHTML = quiz[step]['q'];
        let answer ='';
        for (let key in quiz[step]['an']){
            answer += '<li data-v="${key}">${quiz[step]['a'][key] }</li>';
        }
        document.querySelector(".answer").innerHTML=answer;
    }
    document.onclick = function (event){
        event.stopPropagation();
    }
    showQuestion(step);*/