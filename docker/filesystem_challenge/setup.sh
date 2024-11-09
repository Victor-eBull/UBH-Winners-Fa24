#!/bin/bash

# Root directory for mess
root_dir="./forest"
mkdir -p "$root_dir"

# Function to generate a random folder name
random_folder_name() {
  echo "folder_$(tr -dc a-z0-9 </dev/urandom | head -c 6)"
}

# Function to generate a random file name
random_file_name() {
  echo "file_$(tr -dc a-z0-9 </dev/urandom | head -c 8).txt"
}

# Number of top-level directories
top_dirs=5
# Max depth for nesting
max_depth=3
# Max number of subdirectories per level
max_subdirs=4
# Max number of random files in each bottom directory
max_files=3

create_mess() {
  local dir_path=$1
  local depth=$2
  local is_bottom_dir=1  # Flag to check if it's a bottom directory

  # Stop creating if max depth is reached
  if ((depth > max_depth)); then
    return
  fi

  # Create a random number of subdirectories
  num_subdirs=$((RANDOM % max_subdirs + 1))
  for ((i=0; i<num_subdirs; i++)); do
    sub_dir="$dir_path/$(random_folder_name)"
    mkdir -p "$sub_dir"
    
    # Recursively create more subdirectories with increasing depth
    create_mess "$sub_dir" $((depth + 1))
    is_bottom_dir=0  # It's not a bottom directory if subdirectories are created
  done

  # If it's a bottom directory, create random files
  if ((is_bottom_dir)); then
    num_files=$((RANDOM % max_files + 1))
    secret_file_created=0

    for ((i=0; i<num_files; i++)); do
      if ((secret_file_created == 0)); then
        # Create one file with a .secret extension
        file_path="$dir_path/$(random_file_name).secret"
        echo "This is a secret file!" > "$file_path"
        secret_file_created=1
      else
        # Create a regular random file
        file_path="$dir_path/$(random_file_name)"
        echo "Sample content for $(basename "$file_path")" > "$file_path"
      fi
    done
  fi
}

# Create top-level directories and populate with mess
for ((i=0; i<top_dirs; i++)); do
  top_dir="$root_dir/$(random_folder_name)"
  mkdir -p "$top_dir"
  create_mess "$top_dir" 1
done

echo "Messy directory structure with random files (including one .secret file) created in '$root_dir'."
