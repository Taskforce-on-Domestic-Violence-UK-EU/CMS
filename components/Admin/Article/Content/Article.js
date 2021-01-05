import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useEffect, useContext } from "react";
// Components
import Item from "./Item";
// Contexts
import { AdminContext } from "../contexts/AdminContext";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100vw",
    backgroundColor: "white",
  },

  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  overview: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  title: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Open Sans, sans serif",
    fontSize: 52,
    textAlign: "left",
    width: "40%",
    marginBottom: "5vh",
    marginTop: "15vh",
  },

  imageContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom: "1vh",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
  article: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "40%",
    minHeight: "100%",
    marginTop: "10",
    paddingBottom: "10rem",
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginBottom: 25,
    marginTop: 10,
  },
  text: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 300,
    fontSize: 22,
    width: "100%",
    height: "100%",
    lineHeight: "32px",
  },

  subheader: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 700,
    fontSize: 20,
    width: "100%",
    height: "100%",
    lineHeight: "32px",
  },
  author: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    fontSize: 20,
    margin: 0,
    marginTop: 15,
    color: "black",
  },
  date: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    fontSize: 16,
    margin: 0,
    marginTop: 15,
    color: "grey",
  },
  articleImage: {
    width: "100%",
    height: 400,
    objectFit: "cover",
    marginTop: 30,
    marginBottom: 30,
  },
  chip: {
    marginRight: 15,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 700,
    fontSize: 13,
    backgroundColor: "#E5E5E5",
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  chipArray: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "100%",
    marginBottom: 30,
    marginTop: 7.5,
  },
}));

function Article() {
  const classes = useStyles();
  const {
    article,
    content,
    setContent,
    title,
    setTitle,
    date,
    setDate,
    author,
    setAuthor,
  } = useContext(AdminContext);

  useEffect(() => {
    setContent(article.content);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.overview}>
        <h1 className={classes.title}>{title}</h1>
      </div>
      <div className={classes.article}>
        <div className={classes.innerWrapper}>
          <h2 className={classes.author}>{author}</h2>
          <h2 className={classes.date}>{date}</h2>
        </div>

        <div className={classes.body}>
          {content.length === 0 ? (
            <IconButton
              style={{ marginTop: 45 }}
              onClick={() =>
                setContent([
                  { type: "text", content: "Here is your first line!" },
                  ...content,
                ])
              }
            >
              <AddCircleIcon />
            </IconButton>
          ) : null}
          {content.map((item) => {
            let i = content.indexOf(item);
            return <Item key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Article;
