# Use an official Python runtime as the base image
FROM python:3.10-bullseye

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 8000

# Define environment variable
# ENV NAME World

# Run app.py when the container launches
CMD ["python", "openai_proxy.py"]
