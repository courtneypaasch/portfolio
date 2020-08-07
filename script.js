$(document).ready(function()
{
  $('#load-more-content').click(function()
  {
    $('#more-content').toggleClass('shown');
    $('#load-more-content').hide();

    if( $('#more-content').hasClass('shown') )
    {
      $('#load-more-content').text('Hide content');
      $('#more-content').fadeIn('slow', function()
      {
        $('#load-more-content').fadeIn('slow');
      });
    }
    else
    {
      $('#load-more-content').text('');
      $('#load-more-content').append('<img class="home-arrow action fadeinC trans3"src="images/Arrow-down1.png">');
      $('#more-content').fadeOut('slow', function()
      {
        $('#load-more-content').fadeIn('slow');
      });
    }
  });

  });
