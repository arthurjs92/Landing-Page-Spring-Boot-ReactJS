import React from 'react';
import ImagemProdutos from '../../img/imagens-main/produtos.jpeg';

function Transver() {
  return (
    <section className="">
    <div className="container sessao-transver ">
      <div className="row box-imagem-produto">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 imagem-principal-produtos">
          <img src={ImagemProdutos} className="img-responsive img-fluid d-block" alt=''/>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <h2 className="titulo titulo-transver" id="sessao-inicial">O transver através das <span className="titulo-destaque">transformações da natureza</span></h2>
          <p>Em um mundo cada vez mais obcecado com velocidade, produção em massa e descarte, optamos por ficar do outro lado da moeda.</p>
        </div>
      </div>
      <div className="row box-video-producao flex-wrap-reverse col-xs-12">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <p>No Ateliê Bia Neves, <span className="frase-destaque">cada curva é moldada à mão </span>
          para criar produtos que durarão<span className="frase-destaque"> por toda a vida.</span></p>
        </div>
        <div className="container container-iframe col-xs-12 col-sm-12 col-md-12 col-lg-6 video-producao">
          <iframe className="responsive-iframe" src="https://www.youtube.com/embed/nEvn5Wph3qY?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Transver;