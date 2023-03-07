import axios from 'axios';
import Button from 'components/Navbar/Button';
import { useState } from 'react';
import './styles.css';

type GitHubData = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
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
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.userName}`)
      .then((response) => {
        setGitHubData(response.data);
      })
      .catch((error) => {
        setGitHubData(undefined);
        console.log(error);
      });
  };

  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit}>
        <div className="card-container">
          <h1>Encontre um perfil GutHub</h1>
          <input
            name="userName"
            onChange={handleChange}
            placeholder="Usuário Github"
          />
          <Button text="Encontrar" />
        </div>
      </form>

      {gitHubData && (
        <div className="card-info">
          <div className="img-github">
            <p>imagem</p>
          </div>
          <div className="data-github">
            <p className="title-info">informações</p>
            <div>
              <h4>Perfil:</h4>
              <p className="color-link">{gitHubData.url}</p>
            </div>
            <div>
              <h4>Seguidores:</h4>
              <p>{gitHubData.followers}</p>
            </div>
            <div>
              <h4>Localidade:</h4>
              <p>{gitHubData.location}</p>
            </div>
            <div>
              <h4>Nome:</h4>
              <p>{gitHubData.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
