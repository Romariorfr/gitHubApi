import Button from 'components/Navbar/Button';
import { useState } from 'react';
import './styles.css';

type GitHubData = {
  photo: string;
  profile: string;
  followers: string;
  locations: string;
  name: string;
};

type FormData = {
  userName: string;
};

const Profile = () => {
  const [gitHubData, setGitHubData] = useState<GitHubData>();

  const [formData, setFormData] = useState<FormData>({ userName: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <div className="profile-container">
      <div className="card-container">
        <h1>Encontre um perfil GutHub</h1>
        <input
          name="userName"
          onChange={handleChange}
          placeholder="Usuário Github"
        />
        <Button text="Encontrar" />
      </div>

      <div className="card-info">
        <div className="img-github">
          <p>imagem</p>
        </div>
        <div className="data-github">
          <p className="title-info">informações</p>
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
