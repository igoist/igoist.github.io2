import React from 'react';
import './index.scss';

class Article extends React.Component {
  constructor(props) {                                                                    
    super(props);                                                                         
  }

  render() {
    return (
      <article className="post-card post tag-themes no-image">
        <div className="post-card-content">
          <a className="post-card-content-link" href="/primary-tags/">
          <header className="post-card-header">
            <span className="post-card-tags">Themes</span>
            <h2 className="post-card-title">Primary Tags</h2>
          </header>
          <section className="post-card-excerpt">
            <p>Any post in Ghost can have multiple tags, but Ghost also pays attention to the order of those tags. The first tag entered is considered the most important, and is treated as a</p>
          </section>
          </a>
          <footer className="post-card-meta">
            <img className="author-profile-image" src="//www.gravatar.com/avatar/f95828f4e92f1befebabfb7f65cdc8f2?d=404&amp;s=250" alt="John O'Nolan" />
            <span className="post-card-author"><a href="/author/john/">John O'Nolan</a></span>
          </footer>
        </div>
      </article>
    );
  }
}

export default Article;