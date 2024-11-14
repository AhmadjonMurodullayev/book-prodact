import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  TextField,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { useDebounce } from "../hooks/useDebounce";
import { useSearch } from "../service/useSorch";

export default function Header() {
  const [input, setInput] = useState("");
  const debounceValue = useDebounce(input);
  const { data, isLoading } = useSearch(debounceValue);

  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          BooksVap
        </Typography>

        <Box sx={{ position: "relative", flexGrow: 1, maxWidth: 400, mx: 2 }}>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            variant="outlined"
            placeholder="Search books..."
            fullWidth
            sx={{ bgcolor: "background.paper", borderRadius: 1 }}
          />

          {input && data && (
            <Paper
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                mt: 1,
                boxShadow: 3,
                maxHeight: 300,
                overflowY: "auto",
                zIndex: 1,
              }}
            >
              {isLoading ? (
                <Typography sx={{ p: 2, textAlign: "center" }}>
                  Loading...
                </Typography>
              ) : (
                <List>
                  {data?.map((item) => (
                    <ListItem
                      button
                      key={item.id}
                      sx={{
                        "&:hover": { bgcolor: "grey.200" },
                      }}
                    >
                      <ListItemText
                        primary={item.title}
                        secondary={item.authors}
                        primaryTypographyProps={{
                          fontWeight: "bold",
                          color: "text.primary",
                        }}
                        secondaryTypographyProps={{
                          color: "text.secondary",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </Paper>
          )}
        </Box>

        <Button color="inherit">Home</Button>
        <Button color="inherit">Categories</Button>
        <Button color="inherit">Best Sellers</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}
