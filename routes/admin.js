
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('adminratata', { title: 'Administrador de Preguntas' });
};