
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>School Dashboard</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background: #f4f7fb;
      color: #1e293b;
    }

    .layout {
      display: flex;
      min-height: 100vh;
    }

    /* Sidebar */
    .sidebar {
      width: 240px;
      background: #172554;
      color: white;
      padding: 25px 18px;
    }

    .sidebar h2 {
      font-size: 21px;
      margin-bottom: 35px;
    }

    .sidebar a {
      display: block;
      color: #cbd5e1;
      text-decoration: none;
      padding: 13px;
      margin-bottom: 8px;
      border-radius: 8px;
    }

    .sidebar a:hover,
    .sidebar a.active {
      background: #2563eb;
      color: white;
    }

    /* Main content */
    .main {
      flex: 1;
      min-width: 0;
      padding: 28px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      margin-bottom: 30px;
    }

    .header h1 {
      font-size: 27px;
    }

    .header p {
      color: #64748b;
      margin-top: 7px;
    }

    .profile {
      background: white;
      padding: 12px 16px;
      border-radius: 10px;
      font-weight: bold;
    }

    /* Summary cards */
    .cards {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 18px;
      margin-bottom: 28px;
    }

    .card {
      background: white;
      padding: 22px;
      border-radius: 12px;
      box-shadow: 0 3px 12px #0f172a0a;
    }

    .card p {
      color: #64748b;
      font-size: 14px;
    }

    .card h2 {
      font-size: 30px;
      margin: 14px 0 8px;
    }

    .blue { border-top: 4px solid #3b82f6; }
    .green { border-top: 4px solid #10b981; }
    .orange { border-top: 4px solid #f59e0b; }
    .purple { border-top: 4px solid #8b5cf6; }

    /* Table */
    .panel {
      background: white;
      padding: 22px;
      border-radius: 12px;
      overflow-x: auto;
    }

    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
    }

    input {
      padding: 10px 12px;
      border: 1px solid #cbd5e1;
      border-radius: 7px;
      font-size: 14px;
      max-width: 100%;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 520px;
    }

    th, td {
      text-align: left;
      padding: 15px 12px;
      border-bottom: 1px solid #e2e8f0;
    }

    th {
      background: #f8fafc;
      color: #64748b;
      font-size: 13px;
    }

    .status {
      padding: 6px 10px;
      border-radius: 20px;
      font-size: 12px;
      background: #dcfce7;
      color: #166534;
    }

    .absent {
      background: #fee2e2;
      color: #991b1b;
    }

    .footer {
      color: #64748b;
      font-size: 13px;
      margin-top: 25px;
      text-align: center;
    }

    /* Mobile responsive */
    @media (max-width: 1000px) {
      .cards {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .sidebar {
        width: 200px;
      }
    }

    @media (max-width: 650px) {
      .layout {
        flex-direction: column;
      }

      .sidebar {
        width: 100%;
        padding: 15px;
      }

      .sidebar h2 {
        margin-bottom: 12px;
      }

      .sidebar nav {
        display: flex;
        gap: 5px;
        overflow-x: auto;
      }

      .sidebar a {
        white-space: nowrap;
        margin: 0;
      }

      .main {
        padding: 18px;
      }

      .header {
        align-items: flex-start;
      }

      .header h1 {
        font-size: 23px;
      }

      .profile {
        font-size: 12px;
      }

      .cards {
        gap: 12px;
      }

      .card {
        padding: 15px;
      }

      .card h2 {
        font-size: 25px;
      }

      .panel {
        padding: 15px;
      }
    }
  </style>
</head>

<body>
  <div class="layout">

    <aside class="sidebar">
      <h2>🏫 School Admin</h2>

      <nav>
        <a href="#dashboard" class="active">📊 Dashboard</a>
        <a href="#students">👨‍🎓 Students</a>
        <a href="#teachers">👩‍🏫 Teachers</a>
        <a href="#attendance">📅 Attendance</a>
        <a href="#reports">📄 Reports</a>
        <a href="#settings">⚙️ Settings</a>
      </nav>
    </aside>

    <main class="main" id="dashboard">

      <header class="header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's your school overview.</p>
        </div>

        <div class="profile">Admin 👤</div>
      </header>

      <section class="cards">
        <div class="card blue">
          <p>Total Students</p>
          <h2>1,250</h2>
          <p>School enrollment</p>
        </div>

        <div class="card green">
          <p>Total Teachers</p>
          <h2>65</h2>
          <p>Teaching staff</p>
        </div>

        <div class="card orange">
          <p>Present Today</p>
          <h2>1,180</h2>
          <p>Student attendance</p>
        </div>

        <div class="card purple">
          <p>Attendance Rate</p>
          <h2>94.4%</h2>
          <p>Today's overview</p>
        </div>
      </section>

      <section class="panel" id="students">
        <div class="panel-header">
          <h2>Recent Students</h2>

          <input
            type="search"
            id="search"
            placeholder="Search students..."
            aria-label="Search students"
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Attendance</th>
            </tr>
          </thead>

          <tbody id="student-list">
            <tr>
              <td>ST001</td>
              <td>Ram Sharma</td>
              <td>10</td>
              <td><span class="status">Present</span></td>
            </tr>

            <tr>
              <td>ST002</td>
              <td>Sita Thapa</td>
              <td>9</td>
              <td><span class="status">Present</span></td>
            </tr>

            <tr>
              <td>ST003</td>
              <td>Hari Karki</td>
              <td>8</td>
              <td><span class="status absent">Absent</span></td>
            </tr>

            <tr>
              <td>ST004</td>
              <td>Gita Adhikari</td>
              <td>10</td>
              <td><span class="status">Present</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer class="footer">
        © 2026 School Admin Dashboard. All rights reserved.
      </footer>

    </main>
  </div>

  <script>
    // Search students by ID, name, class, or attendance.
    const searchInput = document.getElementById("search");
    const studentRows = document.querySelectorAll("#student-list tr");

    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase().trim();

      studentRows.forEach(function (row) {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? "" : "none";
      });
    });

    // Highlight the selected sidebar menu.
    document.querySelectorAll(".sidebar a").forEach(function (link) {
      link.addEventListener("click", function () {
        document.querySelectorAll(".sidebar a").forEach(function (item) {
          item.classList.remove("active");
        });

        this.classList.add("active");
      });
    });
  </script>
</body>
</html>
