package com.revature.dtos;

public class FollowRequest {
    private int userId;
    private int EmployeeId;

    public FollowRequest(int userId, int employeeId) {
        this.userId = userId;
        EmployeeId = employeeId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getEmployeeId() {
        return EmployeeId;
    }

    public void setEmployeeId(int employeeId) {
        EmployeeId = employeeId;
    }
}
