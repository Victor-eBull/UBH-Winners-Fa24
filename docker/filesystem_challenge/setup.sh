#!/bin/bash

# Root directory for mess
root_dir="/forest"
mkdir -p "$root_dir"

# Function to generate a random folder name
random_folder_name() {
  echo "tree_$(tr -dc a-z0-9 </dev/urandom | head -c 6)"
}

# Function to generate a random file name
random_file_name() {
  echo "$(tr -dc a-z0-9 </dev/urandom | head -c 8)"
}

# Recursive create function
folder_names=()
recursive_create() {
    local depth=$1        # Accept depth level as an argument
    local max_depth=3     # Max depth for recursion
    local parent_dir=$2   # Parent directory for creating subdirectories

    # Base case: stop recursion if max depth is reached
    if ((depth > max_depth)); then
        folder_names+=("$parent_dir")
        for i in $(seq 1 10); do
            newfile=$(random_file_name)
            cp /tmp/jabber "$parent_dir/$newfile" 
        done

        return
    fi

    for i in $(seq 1 10); do
        # Generate a random folder name
        folder_name=$(random_folder_name)

        # Create the directory inside the parent directory
        mkdir -p "$parent_dir/$folder_name"
        echo "Created folder: $parent_dir/$folder_name"
        
        # Call recursively to create subdirectories
        recursive_create $((depth + 1)) "$parent_dir/$folder_name"
    done
}

recursive_create 1 "$root_dir"

length=${#folder_names[@]}
random_index=$((RANDOM % length))
random_element=${folder_names[$random_index]}
echo "Randomly selected folder: $random_element"

echo "en" > "$random_element/secret"