const SkillsItem = ({ img, title }) => {
  return (
    <div className="skills-data" data-aos="flip-left">
      <div className="skills-blob">
        <img src={img} alt={title} className="skills-img" />
      </div>

      <h3 className="skills-name">{title}</h3>
    </div>
  );
};

export default SkillsItem;
