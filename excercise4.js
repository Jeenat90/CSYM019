function myLoadFunction()
{
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading';

    var elemenent = document.getElementById('paragraph');
    elemenent.firstChild.nodeValue = 'New paragraph text';

}

document.addEventListener('DOMContentLoaded',myLoadFunction);