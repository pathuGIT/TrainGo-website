window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const From = params.get('from');
    const To = params.get('to');
    const Date = params.get('date');

    document.getElementById('dG-from1').innerHTML = From;
    document.getElementById('dG-to1').innerHTML = To;
    document.getElementById('dG-from2').innerHTML = From;
    document.getElementById('dG-to2').innerHTML = To;
    document.getElementById('dG-date1').innerHTML = Date;
    document.getElementById('dG-date2').innerHTML = Date;
})




function serch_Dummy(){

    window.addEventListener('load', () => {
        const params = (new URL(document.location)).searchParams;
        const From = params.get('from');
        const To = params.get('to');
        const Date = params.getElementById('date');
    
        document.getElementById('dG-from1').innerHTML = From;
        document.getElementById('dG-to1').innerHTML = To;
        document.getElementById('dG-from2').innerHTML = From;
        document.getElementById('dG-to2').innerHTML = To;
        document.getElementById('dG-date').innerHTML = Date;
        
        alert(Date);
    })
    
    // var From = document.getElementById("dG-from1").value;
    // var To = document.getElementById("dG-to1").value;
    // alert(From);
}