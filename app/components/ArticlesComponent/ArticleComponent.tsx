// Articles.tsx
"use client"

import React, { useState } from 'react';
import './articles_style.css';
import Article from './Article';
import Modal from 'react-modal';

const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    marginTop: '40px',
    transform: 'translate(-50%, -50%)'
  }
};

interface ArticlesProps {
  articles: Article[];
}

const ArticleComponent: React.FC<ArticlesProps> = ({ articles }) => {
  const articlesPerPage = 4;
  const [visibleArticles, setVisibleArticles] = useState(articlesPerPage);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalArticles = articles.length;

  const handleLoadMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + articlesPerPage);
  };

  const showLoadMoreButton = visibleArticles < totalArticles;


  const handleOpenModal = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
    setIsModalOpen(false);
  };

  const stepsPerPage = 2;
  const [stepCurrentPage, setStepCurrentPage] = useState(1);


  const indexOfLastStep = stepCurrentPage * stepsPerPage;
  const indexOfFirstStep = indexOfLastStep - stepsPerPage;


  const handleNextPage = (article: Article) => {
    if (stepCurrentPage < Math.ceil(article.steps.length / stepsPerPage)) {
      setStepCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (stepCurrentPage > 1) {
      setStepCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.slice(0, visibleArticles).map((article) => (
          <div key={article.id} className="article-container bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-2">{article.description}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p className="text-gray-500">{article.creationDate}</p>
                <button className='bg-bgpink px-4 py-2' onClick={() => handleOpenModal(article)}>
                  Voir
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {showLoadMoreButton && (
        <div className="mt-4 flex justify-center">
          <button onClick={handleLoadMore} className="bg-orange text-white px-4 py-2 rounded-md">
            Charger plus
          </button>
        </div>
      )}



      <Modal
        isOpen={isModalOpen}
        //onRequestClose={handleCloseModal}
        style={customStyles}
      >
        {selectedArticle && (
          <div style={{ width: '550px' }}>
            <div className='flex justify-end'>
              <button onClick={handleCloseModal} className="bg-black text-white px-4 py-2 rounded-md mt-4">
                Fermer
              </button>
            </div>

            {
              selectedArticle.steps.slice(indexOfFirstStep, indexOfLastStep).map((step, stepIndex) => {
                return (
                  <div key={stepIndex} className='mb-2'>
                    <p className="text-gray-600">{step.title}</p>
                    <code>{step.command}</code>
                  </div>
                )
              })
            }


            <div className="mt-4 flex justify-between">
              <button onClick={handlePrevPage} disabled={stepCurrentPage === 1} className="border border-2 border-orange text-black px-4 py-2 rounded-md">
                Préc.
              </button>
              <button
                onClick={() => handleNextPage(selectedArticle)}
                disabled={stepCurrentPage === Math.ceil(selectedArticle.steps.length / stepsPerPage)}
                className="border border-2 border-orange text-black px-4 py-2 rounded-md"
              >
                Suiv.
              </button>
            </div>

          </div>
        )}
      </Modal>

    </div>
  );
};

export default ArticleComponent;
