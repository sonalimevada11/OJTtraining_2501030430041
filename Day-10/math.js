const functions = ["PI", "abs", "sin", "cos", "tan", "asin", "acos", "atan", "log", "round", "ceil", "floor", "sqrt", "random", "pow", "exp", "max", "min"];

function displayMathFunctions() {
    const container = document.getElementById('math-functions-container');
    let html = "";

    for (let name of functions) {
        let value = (name === "PI") ? Math.PI : Math[name](0.5);
        
        if (value % 1 !== 0) value = value.toFixed(4);

        html += `
            <div class="math-card">
                <h3>Math.${name}</h3>
                <div class="example-box">
                    <span class="result">Value/Result: ${value}</span>
                </div>
            </div>`;
    }

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', displayMathFunctions);