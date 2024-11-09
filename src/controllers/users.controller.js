import { customError, CustomError } from "../errors/custom.error.js";
import { generateUsersMock } from "../mocks/user.mock.js";
import { UserServices } from "../services/user.services.js";

export class UserControllers {
  constructor() {
    this.userServices = new UserServices();
  }

  createUserMock = async (req, res) => {
    const users = await this.userServices.createMocks();

    res.status(201).json({ status: "ok", users });
  };

  getAllUsers = async (req, res, next) => {
    try {
      const users = await this.userServices.getAll();
      res.send({ status: "success", payload: users });
    } catch (error) {
      next(error);
    }
  };

  createUser = async (req, res, next) => {
    try{
      const { first_name, last_name, email, password } = req.body;
      if (!first_name || !last_name || !email || !password) return res.status(400).send({ status: "error", error: "Incomplete values" });
      const user = await this.userServices.create({ first_name, last_name, email, password });
      res.status(201).json({ status: "success", payload: user });
    } catch (error) {
      next(error);
    }
  };

  getUser = async (req, res, next) => {
    try {
      const userId = req.params.uid;

      const user = await this.userServices.getById(userId);

      res.send({ status: "success", payload: user });
    } catch (error) {
      console.log(`Error: ${error.message}`);
      next(error);
    }
  };

  updateUser = async (req, res, next) => {
    try{
      const userUpdateBody = req.body;
      const userId = req.params.uid;
      const result = await this.userServices.update(userId, userUpdateBody);
      res.send({ status: "success", payload: result });
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req, res, next) => {
    try {
      const userId = req.params.uid;
      const result = await this.userServices.remove(userId);
      res.send({ status: "success", message: "User deleted" });
    } catch (error) {
      next(error);
    }
  };
}
