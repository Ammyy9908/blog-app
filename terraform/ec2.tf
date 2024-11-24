resource "aws_key_pair" "deployer" {
  key_name   = "terra-automate-key-new"
  public_key = file("~/.ssh/id_ed25519.pub")
}

resource "aws_default_vpc" "default" {

}

# Get the default subnet in the first availability zone
resource "aws_default_subnet" "default_az1" {
  availability_zone = "ap-southeast-1a"  # Adjust this to your region's AZ
}

resource "aws_security_group" "allow_user_to_connect" {
  name        = "allow_tls_new"
  description = "Allow user to connect"
  vpc_id      = aws_default_vpc.default.id
  ingress {
    description = "port 80 allow"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "port 443 allow"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "port 22 allow"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description = " allow all outgoing traffic "
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "mysecurity-new"
  }
}

resource "aws_instance" "testinstance" {
  ami             = "ami-085f9c64a9b75eed5"
  instance_type   = "t2.large"
  key_name        = aws_key_pair.deployer.key_name
  subnet_id       = aws_default_subnet.default_az1.id
  vpc_security_group_ids = [aws_security_group.allow_user_to_connect.id]
  tags = {
    Name = "Automate-New"
  }
  root_block_device {
    volume_size = 30 
    volume_type = "gp3"
  }
}