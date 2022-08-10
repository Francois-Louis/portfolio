import './skills.scss';

const Skills = () => {
  return (
    <div className="skills">
      <h3>Compétences</h3>
      <h4 className="firstChild">Frontend</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Sass</li>
        <li>Greensock</li>
      </ul>
      <h4>Backend</h4>
      <ul>
        <li>PHP</li>
        <li>Symfony</li>
      </ul>
      <h4>CMS</h4>
      <ul>
        <li>Wordpress</li>
      </ul>
      <h4>Environnement</h4>
      <ul>
        <li>Git</li>
        <li>Visual Studio Code</li>
        <li>IntelliJ</li>
        <li>Docker</li>
      </ul>
    </div>
  );
}

export default Skills;
