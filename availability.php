<?php 
    session_start();
    // get TWIG up and running . . .
    // include and register Twig auto-loader
    include ('assets/vendor/Twig-1.24.0/lib/Twig/Autoloader.php');
    Twig_Autoloader::register();
    try {
      // specify where to look for templates
      $loader = new Twig_Loader_Filesystem('templates');
      // initialize Twig environment
      $twig = new Twig_Environment($loader);
      // load templates
      $template = $twig->loadTemplate('availability.tpl');
      $headTemplate = $twig->loadTemplate('head.tpl');
      $navbarTemplate = $twig->loadTemplate('navbar.tpl');
      $afterNavbar = $twig->loadTemplate('after_navbar.tpl');
      $footer = $twig->loadTemplate('footer.tpl');
      $covidSpecial = $twig->loadTemplate('covid_special.tpl');
    } catch (Exception $e) {
      die ('ERROR: ' . $e->getMessage());
    }    
?>
<!DOCTYPE html>
<html>
<head>
    <?php
        echo $headTemplate->render(array());
    ?>
	<!-- validator -->
	<script type = "text/javascript" src="assets/vendor/validator/validator.min.js"></script>	
	<!-- moment.js -->
	<script src="assets/vendor/moment/moment.js"></script>
	<!-- js to run this thing -->
    <script src="assets/js/pages/availability/availability.js"></script>	
</head>
<body>
	<div class="row">
		<!-- bootstrap navbar -->
		<?php
			echo $navbarTemplate->render(array());
		?>
	</div>
	<div id="background">
		<div id="contentWrapper">
			<div id="contentMain" class='container-fluid'>
				<?php
          echo $afterNavbar->render(array());
          echo $covidSpecial->render(array());
					echo $template->render(array());
				?>
			</div>
		</div>
		<div id="footer" class="row">
			<?php
				echo $footer->render(array());
			?>
		</div>		
	</div>
	<script type="text/javascript">
    $(document).ready( function () {
        availability.initialize();
    });	
	</script>
</body>
</html>
    