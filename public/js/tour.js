
var ua = (function() { return navigator.userAgent.toLowerCase(); })();
var inUA = function(value) { return (ua.search(value.toLowerCase()) >= 0); };
var mobile = inUA('android') || inUA('ios') || inUA('iphone') || inUA('ipod') || inUA('ipad');
var url = 'https://thevecentre.s3.eu-west-2.amazonaws.com/christmas/index.htm' + window.location.hash;
function redirect()
{
    location.href = url;
}
function embed()
{
    var attrs = {
        'width': '100vh',
        'height': '100vh',
        'src': url,
        'scrolling': 'auto',
        'frameborder': '0',
        'allowfullscreen': '1',
        'allow': 'fullscreen; accelerometer; gyroscope; magnetometer; vr'
    };
    var iframe = document.createElement('IFRAME');
    for (var name in attrs)
        iframe.setAttribute(name, attrs[name]);
    document.body.appendChild(iframe);
    // document.getElementById("tour-container").appendChild(iframe)
}
if (mobile)
{
    redirect();
}
else if (navigator.getVRDisplays)
{
    navigator.getVRDisplays().then(function(displays)
    {
        if (displays.length > 0)
            redirect();
        else
            embed();
    }).catch(function(err)
    {
        embed();
    });
}
else
{
    embed();
}