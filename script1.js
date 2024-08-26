const n=5;
const array=[];

init();

function init()
{
    for(let i=0;i<n;i++)
        {
            array[i]=Math.random();
        }
        showbars();
}

function play()
{
    const copy=[...array];
   const moves= bubblesort(copy);
   animate(moves);

}


function playSelec()
{
    const copy=[...array];
   const moves= selectionsort(copy);
   animate(moves);
    
}


function animate(moves)
{
    if(moves.length==0)
    {
        showbars();
        return;
    }
    const move=moves.shift();
    const [i,j]=move.indices;
    if(move.type=="swap")
    {
        [array[i], array[j]]=[array[j],array[i]];
    }
    
    showbars(move);
    setTimeout(function(){animate(moves);},500);
}

function bubblesort(array)
{
    const moves=[];
    do{
        var swapped=false;
        for(let i=1;i<array.length;i++)
        {
            moves.push({indices:[i-1,i], type:"compar"});
            if(array[i-1]>array[i])
            {
                swapped=true;
                moves.push({indices:[i-1,i], type:"swap"});
                [array[i-1], array[i]]=[array[i], array[i-1]];
                

            }
        }
    }while(swapped)
    return moves;
}

function showbars(move)
{
    container.innerHTML="";
    for(let i=0;i<n;i++)
    {
        const bar=document.createElement("div");
        bar.style.height=array[i]*100 +"%";
        bar.classList.add("bar");
        if(move && move.indices.includes(i))
        {
            bar.style.backgroundColor=
            move.type=="swap" ?"red" :"blue";
        }
        container.appendChild(bar);

    }
}

function selectionsort(array)
{
    const moves=[];
    
        for(let i=0;i<array.length;i++)
        {
            let lowest=i;
            for(let j=i+1;j<array.length;j++)
            {
                if(array[lowest]>array[j])
                {
                    lowest=j;
                }
            }
            moves.push({indices:[lowest,i], type:"compar"});
            if(i!== lowest)
            {
                moves.push({indices:[lowest,i], type:"swap"});
                [array[lowest], array[i]]=[array[i], array[lowest]];
                

            }
        }

    return moves;
}
