/**
 * Sends the music sheet.
 */
$(function() {
    'use strict';

    /**
     * Toggles the share dialog box.
     */
    $('#shareLink').on('click', function() {
        var dialog = document.querySelector('paper-action-dialog');
        if (!dialog)
            return;

        dialog.toggle();
    });

    /**
     * Sends a email with the music sheet.
     *
     * @param  {object} e The event
     */
    $('#shareAction').on('click', function(e) {
        e.preventDefault();

        var username = $('#login.username').val() || 'Un utilisateur';
        var destinataire = $('#destinataire').val();
        var description = $('#description').val();

        if (!destinataire) {
            document.getElementById('toastError').show();
            return;
        }

        $.ajax({
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': 'VzH_MdGdZGIpXEbE_LdjHA',
                'message': {
                    'from_email': 'music@score.com',
                    'to': [{
                        'email': destinataire,
                        'type': 'to'
                    }],
                    'autotext': 'true',
                    'subject': 'MusicScore Creator - Vous avez reçu une partition',
                    'html': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head> <meta name="viewport" content="width=device-width"/> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> <title>MusicScore Creator</title> <link rel="stylesheet" type="text/css" href="stylesheets/email.css"> <style>*{margin:0;padding:0;font-family:"Helvetica Neue",Helvetica,Helvetica,Arial,sans-serif}img{max-width:100%}.collapse{padding:0}body{width:100%!important;height:100%;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:none}a{color:#2BA6CB}table.body-wrap,table.head-wrap{width:100%;margin:0;padding:0}table.footer-wrap{clear:both!important;width:100%;border-top:1px solid #f7f7f7}h1,h2,h3,h4,h5,h6{margin-bottom:15px;font-family:HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;line-height:1.1;color:#000}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small{text-transform:none;font-size:60%;line-height:0;color:#6f6f6f}h1{font-size:44px;font-weight:200}h2{font-size:37px;font-weight:200}h3{font-size:27px;font-weight:500}h4{font-size:23px;font-weight:500}h5{font-size:17px;font-weight:900}h6{text-transform:uppercase;font-size:14px;font-weight:900}.collapse{margin:0!important;width:100%}p,ul{margin-bottom:10px;font-size:14px;font-weight:400;line-height:1.6}p.lead{font-size:17px}p.last{margin-bottom:0}ul li{margin-left:5px;list-style-position:inside}.container{display:block!important;clear:both!important;margin:0 auto!important;max-width:600px!important}.content{display:block;margin:0 auto;padding:15px;max-width:600px}.content table{width:100%}.column{float:left;width:300px}.column tr td{padding:15px}.column-wrap{margin:0 auto;padding:0!important;max-width:600px!important}.column table{width:100%}.social .column{float:left;width:280px;min-width:279px}.clear{display:block;clear:both}@media only screen and (max-width:600px){div[class=column]{float:none!important;width:auto!important}}</style></head><body bgcolor="#FFFFFF" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0"> <table class="head-wrap" bgcolor="#263238"> <tr> <td></td><td class="header container"> <div class="content"> <table bgcolor="#263238" width="100%" style="width: 100%"> <tr> <td align="center"> <h1 class="collapse" color="#fff" style="color: #fff; font-weight: 300;">MusicScore Creator</h1> </td></tr></table> </div></td><td></td></tr></table> <table class="body-wrap" bgcolor=""> <tr> <td></td><td class="container" align="" bgcolor="#FFFFFF"> <div class="content"> <table> <tr> <td> <h1>Félicitations !</h1> <p class="lead">' + username + ' vous a partagé une partition.</p><p><img src="http://placehold.it/600x300" alt=""></p><p><blockquote>' + description + '</blockquote></p><p>Retrouvez toutes vos partitions musicales sur MusicScore Creator.</p></td></tr></table> </div></td><td></td></tr></table> <table class="footer-wrap"> <tr> <td></td><td class="container"> <div class="content"> <table width="100%" style="width: 100%"> <tr> <td align="center" style="text-align: center;"> <p> <a href="#">Terms</a> | <a href="#">Privacy</a> | <a href="#"> <unsubscribe>Unsubscribe</unsubscribe> </a> </p></td></tr></table> </div></td><td></td></tr></table> </body></html>'
                }
            }
        }).done(function() {
            console.log('Sheet music sent.');
            document.getElementById('toast').show();
        });
    });
});
