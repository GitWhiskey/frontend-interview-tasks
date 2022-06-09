import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const ListItemLink = (props) => {
    const { icon, primary, to, children } = props;

    return (
        <li>
            <ListItem button component={forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />)}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary}>{children}</ListItemText>
            </ListItem>
        </li>
    );
};

export default ListItemLink;