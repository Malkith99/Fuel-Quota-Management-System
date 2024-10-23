//package com.admin.admin.user.service;
//
//import java.util.List;
//
//import org.modelmapper.ModelMapper;
//import org.modelmapper.TypeToken;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.admin.admin.user.dto.UserDTO;
//import com.admin.admin.user.model.User;
//import com.admin.admin.user.repo.UserRepo;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private UserRepo userRepo;
//
//    @Autowired
//    private ModelMapper modelMapper;
//
//    public List<UserDTO> getAllUsers() {
//        List<User> users = userRepo.findAll();
//        return modelMapper.map(users, new TypeToken<List<UserDTO>>() {}.getType());
//    }
//
//    public UserDTO getUserById(int id) {
//        User user = userRepo.findById(id).orElse(null);
//        return modelMapper.map(user, UserDTO.class);
//    }
//
//    public UserDTO saveUser(UserDTO userDTO) {
//        User user = userRepo.save(modelMapper.map(userDTO, User.class));
//        return modelMapper.map(user, UserDTO.class);
//    }
//
//    public UserDTO updateUser(UserDTO userDTO) {
//        User user = userRepo.save(modelMapper.map(userDTO, User.class));
//        return modelMapper.map(user, UserDTO.class);
//    }
//
//    public String deleteUser(int id) {
//        userRepo.deleteById(id);
//        return "User deleted";
//    }
//}
