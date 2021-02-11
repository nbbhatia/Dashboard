import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getAllVacancy } from "../../store/action/signupaction";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 24,
    background: "tomato",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = (props) => {
  const classes = useStyles();
  let AllVal = [];
  const { _allOpening } = props;

  AllVal.push(_allOpening);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllVacancy());
  }, []);
  const handleClick = (id) => {
    console.log("id", id);
  };

  return (
    <Grid
      md={12}
      xs={12}
      sm={12}
      item
      container
      style={{ display: "flex", marginTop: 200 }}
    >
      {AllVal
        ? AllVal.map(
            (obj, i) =>
              Array.isArray(obj) &&
              obj.map((item) => (
                <Grid md={4} container spacing={2} justify="space-around">
                  <Card className={classes.root}>
                    <CardContent>
                      <Button
                        onClick={() => handleClick(item._id)}
                        style={{ textTransform: "none" }}
                      >
                        <Typography
                          className={classes.title}
                          // color="textSecondary"
                          gutterBottom
                        >
                          {item.title}
                        </Typography>
                      </Button>
                      <Typography variant="body1" component="h2">
                        {item.department}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
          )
        : ""}
    </Grid>
  );
};
const mapStateToProps = ({ getAllVacancyReducer }) => {
  return { _allOpening: getAllVacancyReducer };
};
export default connect(mapStateToProps, { getAllVacancy })(SimpleCard);
