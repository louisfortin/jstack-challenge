import React from 'react';
import './profile.css';

const Profile = () => {
  const profile = {
    name: 'John Doe',
    login: 'login',
    company: 'Adneom',
    location: 'Brussels'
  };
  console.log(profile);
  return (
    <div>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      />
      <div class='profile-card'>
        <img
          src='http://4.bp.blogspot.com/-4g_rGZaM0E0/UEhUhQHqC6I/AAAAAAAAA9U/sL2URuUkAes/s1600/Homer_Simpson_Vector_by_bark2008.png'
          alt='John'
          class='img'
        />
        <h1>{profile.name}</h1>
        <p class='title'>{profile.login}</p>
        <p>
          {profile.company}, {profile.location}
        </p>
        <a href='https://github.com/Divinorumz' target='_blank'>
          <i class='fa fa-github' />
        </a>
      </div>
      <h2>Pinned Repositories</h2>
      <div class='content'>
        <div class='cards'>
          <div class='card'>
            <div class='card__side card__side--front'>
              <div class='card__description'>First project</div>
            </div>
            <div
              className={
                'card__side card__side--back card__side--back-' + (1 % 3)
              }
            >
              <div class='card__description'>
                <p>Description of my first project</p>
              </div>
            </div>
          </div>
          <div class='card'>
            <div class='card__side card__side--front'>
              <div class='card__description'>Second project</div>
            </div>
            <div
              className={
                'card__side card__side--back card__side--back-' + (2 % 3)
              }
            >
              <div class='card__description'>
                <p>Description of my second project</p>
              </div>
            </div>
          </div>
          <div class='card'>
            <div class='card__side card__side--front'>
              <div class='card__description'>Third project</div>
            </div>
            <div
              className={
                'card__side card__side--back card__side--back-' + (3 % 3)
              }
            >
              <div class='card__description'>
                <p>Description of my third project</p>
              </div>
            </div>
          </div>
          <div class='card'>
            <div class='card__side card__side--front'>
              <div class='card__description'>Forth project</div>
            </div>
            <div
              className={
                'card__side card__side--back card__side--back-' + (4 % 3)
              }
            >
              <div class='card__description'>
                <p>Description of my forth project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Repositories</h2>
      <div class='content'>
        <div class='cards'>
          <div class='card'>
            <div class='card__side'>
              <div class='card__description'>First simple project</div>
              <div class='card__content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque condimentum vitae mauris in vulputate. Curabitur
                elementum mauris nec dictum convallis. Etiam vitae hendrerit
                sem. Praesent placerat faucibus dignissim. Quisque iaculis quam
                et risus faucibus sagittis a sed ante. Maecenas posuere.
              </div>
            </div>
          </div>
          <div class='card'>
            <div class='card__side'>
              <div class='card__description'>Second simple project</div>
              <div class='card__content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque condimentum vitae mauris in vulputate. Curabitur
                elementum mauris nec dictum convallis. Etiam vitae hendrerit
                sem. Praesent placerat faucibus dignissim. Quisque iaculis quam
                et risus faucibus sagittis a sed ante. Maecenas posuere.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
