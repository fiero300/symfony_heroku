<?php

require('../vendor/autoload.php');

$app = new Silex\Application();
$app['debug'] = true;

// Register the monolog logging service
$app->register(new Silex\Provider\MonologServiceProvider(), 
			   array('monolog.logfile' => 'php://stderr',));

// Register view rendering
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path'       => __DIR__.'/views',
    'twig.class_path' => __DIR__.'../vendor/Twig/lib',
    'twig.options'    => array('debug' => true),
));

// Our web handlers

$app->get('/', function() use($app) 
{
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('index.twig', array('app' => $app, "nombre"=>"Alejandro"));
});

$app->run();
