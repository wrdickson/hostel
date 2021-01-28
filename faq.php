<?php 
    session_start();
    // get TWIG up and running . . .
    // include and register Twig auto-loader
    include 'assets/vendor/Twig-1.24.0/lib/Twig/Autoloader.php';
    Twig_Autoloader::register();
    try {
      // specify where to look for templates
      $loader = new Twig_Loader_Filesystem('templates');
      // initialize Twig environment
      $twig = new Twig_Environment($loader);
      // load templates
      $faqTemplate = $twig->loadTemplate('faq.tpl');
      $headTemplate = $twig->loadTemplate('head.tpl');
      $navbarTemplate = $twig->loadTemplate('navbar.tpl');
	  $afterNavbar = $twig->loadTemplate('after_navbar.tpl');
	  $footer = $twig->loadTemplate('footer.tpl');
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
</head>
<body >
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
					echo $faqTemplate->render(array());
				?>
			</div>
		</div>
		<div id="footer" class="row">
			<?php
				echo $footer->render(array());
			?>
		</div>		
	</div>
</body>
</html>
    