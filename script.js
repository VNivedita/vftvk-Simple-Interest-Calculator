function compute()
{
    var P = document.getElementById("principal").value;
    var p=parseInt(P);
    if(P.length===0||p<=0)
    {
     alert("Enter a Positive number");
     document.querySelector('#principal').focus();
     return false;
    }
    const R = document.querySelector('.rate').value;
    const T = document.querySelector('#years').value;
    const res = (P*R*T)/100;
    const year = new Date().getFullYear() + parseInt(T);
    document.querySelector('#result').innerHTML=`<p>if you deposit <span>${P}</span>,</p>
                                                 <p>at an interest rate of <span>${R}%</span>.</p>
                                                 <p>You will receive an amount of <span>${res}</span>,</p>
                                                 <p> in the year <span>${year}</span>.</p>`
}

function update()
{
  const val = document.querySelector('.rate').value;
  document.querySelector('#range').innerHTML=val+'%';
}
