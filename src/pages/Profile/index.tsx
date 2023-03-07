import Button from 'components/Navbar/Button';
import './styles.css';

const Profile = () => {
  return (
    <div className="profile-container">

      <div className="card-container">
        <h1>Encontre um perfil GutHub</h1>
        <input placeholder='Usuário Github'/>
        <Button text="Encontrar" />
      </div>

      <div className="card-info">
        <div className="img-github">
          <p >imagem</p>
        </div>
        <div className="data-github">
          <p className='title-info'>informações</p>
          <div>
            <h4>Perfil:</h4>
            <p className="color-link">https://api.github.com/users/acenelio</p>
          </div>
          <div>
            <h4>Seguidores:</h4>
            <p>4379</p>
          </div>
          <div>
            <h4>Localidade:</h4>
            <p>Uberlândia</p>
          </div>
          <div>
            <h4>Nome:</h4>
            <p>Nelio Alvez</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;
