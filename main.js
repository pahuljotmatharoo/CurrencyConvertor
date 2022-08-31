let calculate = document.getElementById("calculate")

calculate.addEventListener("click", ()=>{ 
    let answer = document.getElementById("answer")
    let a = Number(document.getElementById("a").value)
    var b
    let CurrencyS = document.getElementById("CurrencyS").selectedIndex
    let CurrencyE = document.getElementById("CurrencyE").selectedIndex
    switch(CurrencyS) {
        case 0:
            switch(CurrencyE) {
            case 0:
                b = a
            answer.textContent = `Conversion: ${b.toFixed(2)}₹`
                break;
            case 1:
                b = a * 0.016
            answer.textContent = `Conversion: ${b.toFixed(2)}$`
                break;
            case 2:
                b = a * 0.013
            answer.textContent = `Conversion: ${b.toFixed(2)}$`
                break;
            case 3:
                b = a * 0.011
            answer.textContent = `Conversion: ${b.toFixed(2)}£`
                break;
            case 4:
                b = a * 0.013
                answer.textContent = `Conversion: ${b.toFixed(2)}€`
                break;
            case 5:
                b = a * 1.74
                answer.textContent = `Conversion: ${b.toFixed(2)}¥`
                break;
            }
            break;
        case 1:
            switch(CurrencyE) {
                case 0:
                    b = a * 61.22
                answer.textContent = `Conversion: ${b.toFixed(2)}₹`
                    break;
                case 1:
                    b = a
                answer.textContent = `Conversion: ${b.toFixed(2)}$`
                    break;
                case 2:
                    b = a * 0.77
                answer.textContent = `Conversion: ${b.toFixed(2)}$`
                    break;
                case 3:
                    b = a * 0.66
                answer.textContent = `Conversion: ${b.toFixed(2)}£`
                    break;
                case 4:
                    b = a * 0.76
                    answer.textContent = `Conversion: ${b.toFixed(2)}€`
                    break;
                case 5:
                    b = a * 105.84
                    answer.textContent = `Conversion: ${b.toFixed(2)}¥`
                    break;
                }
            break;
        case 2:
            switch(CurrencyE) {
                case 0:
                    b = a * 79.98
                answer.textContent = `Conversion: ${b.toFixed(2)}₹`
                    break;
                case 1:
                    b = a * 1.31
                answer.textContent = `Conversion: ${b.toFixed(2)}$`
                    break;
                case 2:
                    b = a
                answer.textContent = `Conversion: ${b.toFixed(2)}$`
                    break;
                case 3:
                    b = a * 0.86
                answer.textContent = `Conversion: ${b.toFixed(2)}£`
                    break;
                case 4:
                    b = a
                    answer.textContent = `Conversion: ${b.toFixed(2)}€`
                    break;
                case 5:
                    b = a * 138.46;
                    answer.textContent = `Conversion: ${b.toFixed(2)}¥`
                break;
                }
            break;
        case 3:
            switch(CurrencyE) {
                case 0:
                    b = a * 93.4
                answer.textContent = `Conversion: ${b.toFixed(2)}₹`
                    break;
                case 1:
                    b = a * 1.53
                answer.textContent = `Conversion: ${b.toFixed(2)}$`
                    break;
                case 2:
                    b = a * 1.17
                answer.textContent = `Conversion: ${b.toFixed(2)}$`
                    break;
                case 3:
                    b = a
                answer.textContent = `Conversion: ${b.toFixed(2)}£`
                    break;
                case 4:
                    b = a * 1.16
                    answer.textContent = `Conversion: ${b.toFixed(2)}€`
                    break;
                case 5:
                    b = a * 161.60
                    answer.textContent = `Conversion: ${b.toFixed(2)}¥`
                    break;
                }
            break;
        case 4:
            switch(CurrencyE) {
                case 0:
                    b = a * 79.88
                    answer.textContent = `Conversion: ${b.toFixed(2)}₹`
                    break;
                case 1:
                    b = a * 1.31
                    answer.textContent = `Conversion: ${b.toFixed(2)}$`
                    break;
                case 2:
                    b = a
                    answer.textContent = `Conversion: ${b.toFixed(2)}$`
                    break;
                case 3:
                    b = a * 0.86
                    answer.textContent = `Conversion: ${b.toFixed(2)}£`
                    break;
                case 4:
                    b = a
                    answer.textContent = `Conversion: ${b.toFixed(2)}€`
                    break;
                case 5:
                    b = a * 138.85
                    answer.textContent = `Conversion: ${b.toFixed(2)}¥`
                    break;
                }
            break;
            case 5:
                switch(CurrencyE) { 
                case 0:
                    b = a * 0.58
                    answer.textContent = `Conversion: ${b.toFixed(2)}₹`
                    break;
                case 1:
                    b = a * 0.0094
                    answer.textContent = `Conversion: ${b.toFixed(2)}$`
                    break;
                case 2:
                    b = a * 0.0072
                    answer.textContent = `Conversion: ${b.toFixed(2)}$`
                    break;
                case 3:
                    b = a * 0.0062
                    answer.textContent = `Conversion: ${b.toFixed(2)}£`
                    break;
                case 4:
                    b = a * 0.0072
                    answer.textContent = `Conversion: ${b.toFixed(2)}€`
                    break;
                case 5:
                    b = a
                    answer.textContent = `Conversion: ${b.toFixed(2)}¥`
                    break;
                }
            break;
    }
})
