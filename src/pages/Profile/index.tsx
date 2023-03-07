import Button from 'components/Navbar/Button';
import './styles.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="card-container">
        <h1>Encontre um perfil GutHub</h1>
        <input />
        <Button text="Encontrar" />
      </div>
      <div className="card-info">
        <div className="img-github">
          <p>imagem</p>
        </div>
        <div className="data-github">
          <p>informações</p>
          <div>Perfil:</div>
          <div>Seguidores:</div>
          <div>Localidade:</div>
          <div>Nome:</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
